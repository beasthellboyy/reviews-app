# Reviews App

## Overview
The Reviews App is a TypeScript-based application that allows users to create, retrieve, and delete reviews. It serves as a backend service for managing review data, providing a structured API for review operations.

## Project Structure
```
reviews-app
├── src
│   ├── app.ts                # Entry point of the application
│   ├── controllers           # Contains the review controller
│   │   └── reviewController.ts
│   ├── models                # Contains the review model
│   │   └── reviewModel.ts
│   ├── routes                # Contains the review routes
│   │   └── reviewRoutes.ts
│   └── types                 # Contains TypeScript types
│       └── index.ts
├── package.json              # NPM configuration file
├── tsconfig.json             # TypeScript configuration file
└── README.md                 # Project documentation
```

## Features
- Create a new review
- Retrieve all reviews
- Delete a review

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/reviews-app.git
   ```
2. Navigate to the project directory:
   ```
   cd reviews-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To start the application, run:
```
npm start
```

## API Endpoints
- `POST /reviews` - Create a new review
- `GET /reviews` - Retrieve all reviews
- `DELETE /reviews/:id` - Delete a review by ID

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.