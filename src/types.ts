export type Genre =
  | "Sci-Fi"
  | "Technology"
  | "Business"
  | "History"
  | "Mystery"
  | "Psychology"
  | "Fantasy"
  | "Memoir";

export type SortBy = "rating" | "title" | "year";

export type Book = {
  id: string;
  title: string;
  author: string;
  genre: Genre;
  year: number;
  rating: number;
  pages: number;
  description: string;
  coverColor: string;
};
