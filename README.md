# You are given a small React + TypeScript app called Book Explorer.

The app lets users:

- search books by title or author
- filter by genre
- sort by rating, title, or year
- select a book to view details
- mark books as favorites
- The app partialy works and it is intentionally not optimized.

# Your task

Improve and extend the app in stages:

## Part 1: Update the BookList component & display the currently selected filter.

In the BookList.tsx file, you will need to implement some code that will display the list of
books received. All properties of the component should be used.

In case the list of books is empty, a suggestive message should be displayed.

You will also need to display the currently selected filter on the right of "Favorites" counter (right below the select)

## Part 2: Optimize the current implementation

Refactor the current code to improve performance and structure.

Pay attention to:

- rendering performance
- repeated calculations
- unnecessary rerenders
- event handlers passed through components

## Part 3: Add mock async fetching

Add a mock data-fetching layer for books and book details.

## Part 4: Add client-side caching

Add a simple caching mechanism for repeated requests so the app avoids unnecessary work when the same data is requested again.
