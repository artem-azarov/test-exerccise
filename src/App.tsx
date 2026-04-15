import { useState } from "react";
import { BOOKS } from "./data";
import { BookDetails } from "./components/BookDetails";
import { BookList } from "./components/BookList";
import type { Book, Genre, SortBy } from "./types";

export default function App() {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState<Genre | "All">("All");
  const [sortBy, setSortBy] = useState<SortBy>("rating");
  const [selectedBookId, setSelectedBookId] = useState<string>(
    BOOKS[0]?.id ?? ""
  );
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const genres = [
    "All",
    ...Array.from(new Set(BOOKS.map((book) => book.genre))),
  ];

  const visibleBooks = BOOKS.filter((book) => {
    const matchesQuery =
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase());

    const matchesGenre = genre === "All" || book.genre === genre;

    return matchesQuery && matchesGenre;
  }).sort((a, b) => {
    if (sortBy === "title") return a.title.localeCompare(b.title);
    if (sortBy === "year") return b.year - a.year;
    return b.rating - a.rating;
  });

  const selectedBook = BOOKS.find((book) => book.id === selectedBookId);
  const relatedBooks =
    selectedBook == null
      ? []
      : BOOKS.filter(
          (book) =>
            book.id !== selectedBook.id &&
            (book.genre === selectedBook.genre ||
              book.author === selectedBook.author)
        )
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 4);

  const favoriteCount = favoriteIds.length;

  const toggleFavorite = (bookId: string) => {
    setFavoriteIds((current) =>
      current.includes(bookId)
        ? current.filter((id) => id !== bookId)
        : [...current, bookId]
    );
  };

  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: 20,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <header style={{ marginBottom: 20 }}>
        <h1>Book Explorer</h1>
        <p>Browse, filter, and inspect books.</p>
      </header>

      <div
        style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 20 }}
      >
        <section>
          <div style={{ display: "grid", gap: 12, marginBottom: 16 }}>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title or author"
              style={{ padding: 10, borderRadius: 8, border: "1px solid #ccc" }}
            />

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {genres.map((value) => (
                <button
                  key={value}
                  onClick={() => setGenre(value as Genre | "All")}
                >
                  {value}
                </button>
              ))}
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortBy)}
              style={{ padding: 10, borderRadius: 8, border: "1px solid #ccc" }}
            >
              <option value="rating">Sort by rating</option>
              <option value="title">Sort by title</option>
              <option value="year">Sort by year</option>
            </select>

            <div>
              Visible: {visibleBooks.length} · Favorites: {favoriteCount}
            </div>
          </div>

          <BookList
            books={visibleBooks}
            selectedBookId={selectedBookId}
            favoriteIds={favoriteIds}
            onSelectBook={(bookId) => setSelectedBookId(bookId)}
            onToggleFavorite={(bookId) => toggleFavorite(bookId)}
          />
        </section>

        <BookDetails
          book={selectedBook}
          relatedBooks={relatedBooks}
          isFavorite={
            selectedBook ? favoriteIds.includes(selectedBook.id) : false
          }
          onToggleFavorite={(bookId) => toggleFavorite(bookId)}
          onSelectBook={(bookId) => setSelectedBookId(bookId)}
        />
      </div>
    </div>
  );
}
