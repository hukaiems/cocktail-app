# Capstone Public API - Cocktail App

This is a simple Node.js and Express web app that lets users browse and select cocktails by category using [TheCocktailDB API](https://www.thecocktaildb.com/api.php). The UI is styled with Tailwind CSS and rendered with EJS templates.

So i build it for practicing and it quite a lot fun for a thursday morning, hope you find your drink here.

## Features

- Browse cocktail categories from TheCocktailDB
- Select a category to view drinks in that category
- Responsive, modern UI with Tailwind CSS
- Uses EJS for server-side rendering

## Folder Structure

```
Capstone_public_API/
├── index.js
├── package.json
├── .gitignore
├── public/
│   └── cocktail_sticker.png
└── views/
    └── index.ejs
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone this repository or copy the folder.
2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the server:

   ```sh
   node index.js
   ```

4. Open your browser and go to [http://localhost:3000](http://localhost:3000)

## Usage

- On the homepage, select a cocktail category from the dropdown and click "Find ur drink".
- The page will display drinks from the selected category, including images and names.

## Technologies Used

- Node.js
- Express
- EJS
- Axios
- Tailwind CSS (via CDN)
- [TheCocktailDB API](https://www.thecocktaildb.com/api.php)

## License

This project is licensed under the ISC License.