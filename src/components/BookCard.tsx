import { memo } from "react";
import type { Book } from "../types";

type Props = {
  book: Book;
  isSelected: boolean;
  isFavorite: boolean;
  onSelect: (bookId: string) => void;
  onToggleFavorite: (bookId: string) => void;
};

export const BookCard = memo(function BookCard({
  book,
  isSelected,
  isFavorite,
  onSelect,
  onToggleFavorite,
}: Props) {
  return (
    <li
      style={{
        listStyle: "none",
        border: isSelected ? "2px solid #4c7dff" : "1px solid #ddd",
        borderRadius: 12,
        padding: 12,
        marginBottom: 10,
        background: "white",
        display: "grid",
        gridTemplateColumns: "56px 1fr auto",
        gap: 12,
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 56,
          height: 72,
          borderRadius: 10,
          background: book.coverColor,
        }}
      />

      <div>
        <div style={{ fontWeight: 700 }}>{book.title}</div>
        <div>{book.author}</div>
        <small>
          {book.genre} · {book.year} · ★ {book.rating}
        </small>
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => onSelect(book.id)}>Open</button>
        <button onClick={() => onToggleFavorite(book.id)}>
          {isFavorite ? "★" : "☆"}
        </button>
      </div>
    </li>
  );
});
