import { memo } from "react";
import type { Book } from "../types";
import { BookCard } from "./BookCard";

type Props = {
  books: Book[];
  selectedBookId: string;
  favoriteIds: string[];
  onSelectBook: (bookId: string) => void;
  onToggleFavorite: (bookId: string) => void;
};

export const BookList = memo(function BookList({
  books,
  selectedBookId,
  favoriteIds,
  onSelectBook,
  onToggleFavorite,
}: Props) {
  return (
    <section>
      <h2>Books</h2>
      <p>{books.length} results</p>

      {/* Display the list of books here. */}

      <p>No books found.</p>
    </section>
  );
});
