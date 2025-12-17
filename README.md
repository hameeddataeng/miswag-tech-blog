# Miswag Tech Blog

A professional tech blog built with Next.js and deployed on GitHub Pages.

## Features

- 📝 Markdown-based articles
- 🎨 Clean, professional design
- 🔍 Article filtering and sorting
- 👥 Team member profiles
- 📱 Fully responsive
- 🚀 Static site generation for fast loading

## Project Structure

```
miswag-tech-blog/
├── public/
│   ├── content/          # JSON configuration files
│   ├── data/             # Article markdown files and images
│   ├── avatars/          # Team member avatars
│   ├── logo.png
│   └── favicon.png
├── app/                  # Next.js app directory
├── components/           # React components
└── .github/workflows/    # GitHub Actions for deployment
```

## Development

Install dependencies:
```bash
npm install
```

Run development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## Adding Content

### Adding Articles

1. Create a new folder in `public/data/{article-slug}/`
2. Add `index.md` with your article content
3. Add article metadata to `public/content/articles.json`
4. Add any images to the article folder

### Adding Team Members

1. Add member info to `public/content/team.json`
2. Add avatar image to `public/avatars/`

## Deployment

This site automatically deploys to GitHub Pages when you push to the main branch.

## License

MIT
