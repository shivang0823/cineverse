# CineVerse

CineVerse is a web application for discovering, reviewing, and managing movies. It provides users with a platform to browse popular films, read and write reviews, and organize watchlists.

## Features

- Browse trending and top-rated movies
- Search for movies by title, genre, or year
- View detailed movie information (cast, synopsis, ratings)
- User authentication and profiles
- Write and read movie reviews
- Create and manage personal watchlists

## Technologies Used

- Frontend: React.js, Redux, CSS/Styled Components
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT
- API Integration: [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api)

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/cineverse.git
    cd cineverse
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add your MongoDB URI and TMDb API key:
      ```
      MONGODB_URI=your_mongodb_uri
      TMDB_API_KEY=your_tmdb_api_key
      JWT_SECRET=your_jwt_secret
      ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure

```
cineverse/
├── client/         # React frontend
├── server/         # Express backend
├── models/         # Mongoose models
├── routes/         # API routes
├── controllers/    # Route controllers
└── README.md
```

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [TMDb](https://www.themoviedb.org/) for movie data and images
- Open source community
