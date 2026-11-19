import { useEffect, useState } from 'react'
import axios from 'axios'

interface Author {
  id: string
  name: string
  nationality: string
}

interface Publisher {
  name: string
  location: string
}

interface Book {
  id: string
  title: string
  year: number
  genre: string
  author: Author | null
  publisher: Publisher | null
  available: boolean
  tags: string[]
  rating: number
}

interface ApiResponse {
  status: string
  meta: {
    count: number
    page: number
    page_size: number
    total_pages: number
  }
  data: Book[]
}

export default function Solution() {
  const [books, setBooks] = useState<Book[]>([])
  const [search, setSearch] = useState('')
  const [genreFilter, setGenreFilter] = useState('')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const genres = Array.from(new Set(books.map(b => b.genre)))

  const fetchBooks = async (page: number) => {
    const res = await axios.get<ApiResponse>(`http://localhost:3000/books?page=${page}`)
    setBooks(res.data.data)
    setTotalPages(res.data.meta.total_pages)
  }

  useEffect(() => {
    fetchBooks(page)
  }, [page])

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase()) &&
    (genreFilter ? book.genre === genreFilter : true)
  )

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-amber-600">📚 Book Explorer</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-10 justify-between items-center">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
        <select
          className="w-full md:w-1/3 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
          value={genreFilter}
          onChange={e => setGenreFilter(e.target.value)}
        >
          <option value="">All Genres</option>
          {genres.map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBooks.map(book => (
          <div key={book.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-amber-200 transition-shadow duration-300">
            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-2xl font-bold text-amber-700 mb-1 leading-tight">{book.title}</h2>
                <p className="text-sm text-gray-500 italic mb-3">{book.genre} • {book.year}</p>
                <p className="text-base text-gray-700 mb-2">{book.author?.name || 'Unknown Author'}{book.author?.nationality && ` • ${book.author.nationality}`}</p>
                <p className="text-sm text-gray-600 mb-4">Published by {book.publisher?.name || 'N/A'}{book.publisher?.location && `, ${book.publisher.location}`}</p>
              </div>
              <div className="mt-auto">
                <p className="text-sm text-gray-600">{book.available ? '📗 Available' : '📕 Not Available'}</p>
                <p className="text-sm text-yellow-600 font-medium">Rating: {book.rating} ⭐</p>
                <div className="flex flex-wrap mt-3 gap-2">
                  {book.tags.map(tag => (
                    <span key={tag} className="text-xs bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-medium">#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-6 mt-12">
        <button
          disabled={page === 1}
          onClick={() => setPage(p => p - 1)}
          className="px-5 py-2.5 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >Previous</button>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(p => p + 1)}
          className="px-5 py-2.5 rounded-full bg-amber-400 hover:bg-amber-500 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >Next</button>
      </div>
    </div>
  )
}
