-- DropForeignKey
ALTER TABLE "Flashcard" DROP CONSTRAINT "Flashcard_setId_fkey";

-- AlterTable
ALTER TABLE "Flashcard" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "FlashcardSet" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "Flashcard" ADD CONSTRAINT "Flashcard_setId_fkey" FOREIGN KEY ("setId") REFERENCES "FlashcardSet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
