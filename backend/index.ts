import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

const app = express();
app.use(cors());

const books = [
  {
    id: uuidv4(),
    title: "The Art of Clean Code",
    year: 2020,
    genre: "Software Engineering",
    author: {
      id: uuidv4(),
      name: "Robert C. Martin",
      nationality: "American"
    },
    publisher: {
      name: "Pragmatic Bookshelf",
      location: "USA"
    },
    available: true,
    tags: ["clean code", "OOP", "refactoring"],
    rating: 4.8
  },
  {
    id: uuidv4(),
    title: "Deep Learning with Python",
    year: 2019,
    genre: "Artificial Intelligence",
    author: {
      id: uuidv4(),
      name: "François Chollet",
      nationality: "French"
    },
    publisher: {
      name: "Manning",
      location: "USA"
    },
    available: false,
    tags: ["deep learning", "keras", "AI"],
    rating: 4.6
  },
  {
    id: uuidv4(),
    title: "The Pragmatic Programmer",
    year: 1999,
    genre: "Programming",
    author: {
      id: uuidv4(),
      name: "Andrew Hunt",
      nationality: "American"
    },
    publisher: {
      name: "Addison-Wesley",
      location: "USA"
    },
    available: true,
    tags: ["career", "patterns", "refactoring"],
    rating: 4.9
  },
  {
    id: uuidv4(),
    title: "Clean Architecture",
    year: 2017,
    genre: "Architecture",
    author: null,
    publisher: {
      name: "Pearson",
      location: "USA"
    },
    available: true,
    tags: ["architecture", "design", "clean code"],
    rating: 4.7
  },
  {
    id: uuidv4(),
    title: "Design Patterns",
    year: 1994,
    genre: "Software Engineering",
    author: {
      id: uuidv4(),
      name: "Erich Gamma",
      nationality: "Swiss"
    },
    publisher: null,
    available: false,
    tags: ["patterns", "OOP", "design"],
    rating: 4.5
  },
  {
    id: uuidv4(),
    title: "Refactoring",
    year: 2018,
    genre: "Programming",
    author: {
      id: uuidv4(),
      name: "Martin Fowler",
      nationality: "British"
    },
    publisher: {
      name: "Addison-Wesley",
      location: "USA"
    },
    available: true,
    tags: ["refactor", "clean code"],
    rating: 4.6
  },
  {
    id: uuidv4(),
    title: "Fluent Python",
    year: 2015,
    genre: "Programming",
    author: {
      id: uuidv4(),
      name: "Luciano Ramalho",
      nationality: "Brazilian"
    },
    publisher: {
      name: "O'Reilly Media",
      location: "USA"
    },
    available: true,
    tags: ["python", "advanced", "language"],
    rating: 4.7
  },
  {
    id: uuidv4(),
    title: "Python Crash Course",
    year: 2016,
    genre: "Programming",
    author: null,
    publisher: {
      name: "No Starch Press",
      location: "USA"
    },
    available: false,
    tags: ["beginner", "python"],
    rating: 4.3
  },
  {
    id: uuidv4(),
    title: "You Don't Know JS",
    year: 2015,
    genre: "JavaScript",
    author: {
      id: uuidv4(),
      name: "Kyle Simpson",
      nationality: "American"
    },
    publisher: {
      name: "O'Reilly Media",
      location: "USA"
    },
    available: true,
    tags: ["javascript", "deep dive"],
    rating: 4.8
  },
  {
    id: uuidv4(),
    title: "Eloquent JavaScript",
    year: 2018,
    genre: "JavaScript",
    author: null,
    publisher: {
      name: "No Starch Press",
      location: "USA"
    },
    available: true,
    tags: ["javascript", "learning"],
    rating: 4.4
  },
  {
    id: uuidv4(),
    title: "Learning React",
    year: 2020,
    genre: "Frontend",
    author: {
      id: uuidv4(),
      name: "Alex Banks",
      nationality: "American"
    },
    publisher: {
      name: "O'Reilly Media",
      location: "USA"
    },
    available: true,
    tags: ["react", "frontend", "javascript"],
    rating: 4.5
  },
  {
    id: uuidv4(),
    title: "Effective Java",
    year: 2008,
    genre: "Programming",
    author: {
      id: uuidv4(),
      name: "Joshua Bloch",
      nationality: "American"
    },
    publisher: {
      name: "Addison-Wesley",
      location: "USA"
    },
    available: false,
    tags: ["java", "best practices"],
    rating: 4.7
  },
  {
    id: uuidv4(),
    title: "JavaScript: The Good Parts",
    year: 2008,
    genre: "JavaScript",
    author: {
      id: uuidv4(),
      name: "Douglas Crockford",
      nationality: "American"
    },
    publisher: null,
    available: false,
    tags: ["javascript", "minimalism"],
    rating: 4.2
  },
  {
    id: uuidv4(),
    title: "Code Complete",
    year: 2004,
    genre: "Software Engineering",
    author: null,
    publisher: {
      name: "Microsoft Press",
      location: "USA"
    },
    available: true,
    tags: ["engineering", "code quality"],
    rating: 4.6
  },
  {
    id: uuidv4(),
    title: "Introduction to Algorithms",
    year: 2009,
    genre: "Computer Science",
    author: {
      id: uuidv4(),
      name: "Thomas H. Cormen",
      nationality: "American"
    },
    publisher: {
      name: "MIT Press",
      location: "USA"
    },
    available: true,
    tags: ["algorithms", "theory"],
    rating: 4.9
  }
];

app.get('/books', (req, res) => {
  const page = parseInt(req.query.page as string) || 1;
  const pageSize = 10;
  const totalItems = books.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedBooks = books.slice(start, end);

  res.json({
    status: "success",
    meta: {
      count: totalItems,
      page,
      page_size: pageSize,
      total_pages: totalPages
    },
    data: paginatedBooks
  });
});


app.listen(3000, () => {
  console.log('📚 API: http://localhost:3000/books');
});
