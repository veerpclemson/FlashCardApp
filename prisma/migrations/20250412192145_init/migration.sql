-- CreateTable
CREATE TABLE "flashcard" (
    "id" TEXT NOT NULL,
    "definition" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "flashcard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "account" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FlashcardSet" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FlashcardSet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "flashcard" ADD CONSTRAINT "flashcard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
