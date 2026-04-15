import { memo } from "react";
import type { Book } from "../types";

type Props = {
  book?: Book;
  relatedBooks: Book[];
  isFavorite: boolean;
  onToggleFavorite: (bookId: string) => void;
  onSelectBook: (bookId: string) => void;
};

export const BookDetails = memo(function BookDetails({
  book,
  relatedBooks,
  isFavorite,
  onToggleFavorite,
  onSelectBook,
}: Props) {
  if (!book) {
    return (
      <aside
        style={{
          border: "1px solid #ddd",
          borderRadius: 12,
          padding: 16,
          background: "#fafafa",
        }}
      >
        <h2>Details</h2>
        <div>Select a book to see details.</div>
      </aside>
    );
  }

  return (
    <aside
      style={{
        border: "1px solid #ddd",
        borderRadius: 12,
        padding: 16,
        background: "#fafafa",
      }}
    >
      <h2>Details</h2>

      <div
        style={{
          width: 72,
          height: 92,
          borderRadius: 12,
          background: book.coverColor,
          marginBottom: 12,
        }}
      />

      <h3 style={{ margin: "0 0 8px" }}>{book.title}</h3>
      <div>{book.author}</div>
      <div>
        {book.genre} · {book.year}
      </div>
      <div>Rating: ★ {book.rating}</div>
      <div>Pages: {book.pages}</div>

      <p style={{ marginTop: 12 }}>{book.description}</p>

      <button onClick={() => onToggleFavorite(book.id)}>
        {isFavorite ? "Remove favorite" : "Add favorite"}
      </button>

      <h4 style={{ marginTop: 20 }}>Related books</h4>
      <ul style={{ padding: 0 }}>
        {relatedBooks.map((item) => (
          <li key={item.id} style={{ listStyle: "none", marginBottom: 8 }}>
            <button onClick={() => onSelectBook(item.id)}>
              {item.title} — {item.author}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
});
