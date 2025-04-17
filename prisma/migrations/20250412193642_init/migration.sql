/*
  Warnings:

  - You are about to drop the column `createdAt` on the `FlashcardSet` table. All the data in the column will be lost.
  - You are about to drop the `account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `flashcard` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `description` on table `FlashcardSet` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "flashcard" DROP CONSTRAINT "flashcard_userId_fkey";

-- AlterTable
ALTER TABLE "FlashcardSet" DROP COLUMN "createdAt",
ALTER COLUMN "description" SET NOT NULL;

-- DropTable
DROP TABLE "account";

-- DropTable
DROP TABLE "flashcard";

-- CreateTable
CREATE TABLE "Flashcard" (
    "id" SERIAL NOT NULL,
    "front" TEXT NOT NULL,
    "back" TEXT NOT NULL,
    "setId" INTEGER NOT NULL,

    CONSTRAINT "Flashcard_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Flashcard" ADD CONSTRAINT "Flashcard_setId_fkey" FOREIGN KEY ("setId") REFERENCES "FlashcardSet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
