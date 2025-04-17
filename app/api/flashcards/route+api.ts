// app/api/flashcards/route.ts

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// Define types for FlashcardSet and Flashcard
interface Flashcard {
  front: string;
  back: string;
}

interface FlashcardSet {
  id: string;
  title: string;
  description?: string;
  flashcards: Flashcard[];
}

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}

export async function POST(req: Request) {
  try {
    const { title, description, cards } = await req.json();

    const flashcardSet = await prisma.flashcardSet.create({
      data: {
        title,
        description,
        flashcards: {
          create: cards.map((card: { front: string; back: string }) => ({
            front: card.front,
            back: card.back,
          })),
        },
      },
    });

    return NextResponse.json(
      { message: "Flashcard set created successfully", id: flashcardSet.id },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error: any) {
    console.error("Error creating flashcard set:", error);
    return NextResponse.json(
      { error: `Error creating flashcard set: ${error.message}` },
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}
export async function GET(req: Request) {
  console.log("starting");
  try {
    const flashcardSet = await prisma.FlashcardSet.findMany()
    console.log("logged set" + flashcardSet);

    if (!flashcardSet) {
      return NextResponse.json(
        { error: "Flashcard set not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(flashcardSet);
  } catch (error: any) {
    console.error("Error fetching flashcard set:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
