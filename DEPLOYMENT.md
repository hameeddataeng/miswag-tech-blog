# Deployment Guide

This guide will help you deploy the Miswag Tech Blog to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Node.js and npm installed

## Step 1: Push to GitHub

1. Create a new repository on GitHub (e.g., `miswag-tech-blog`)
2. Initialize git in your project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Miswag Tech Blog"
   ```
3. Connect to your GitHub repository:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/miswag-tech-blog.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** > **Pages**
3. Under **Source**, select **GitHub Actions**

## Step 3: Automatic Deployment

The GitHub Actions workflow is already configured in `.github/workflows/deploy.yml`. Every time you push to the `main` branch, your site will automatically build and deploy.

## Step 4: Access Your Site

After the first deployment completes (usually takes 2-3 minutes), your site will be available at:
```
https://YOUR_USERNAME.github.io/miswag-tech-blog/
```

## Custom Domain (Optional)

To use a custom domain:

1. Go to **Settings** > **Pages** in your GitHub repository
2. Enter your custom domain in the **Custom domain** field
3. Add a CNAME record in your domain provider pointing to `YOUR_USERNAME.github.io`

## Local Development

To run the site locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Adding New Content

### Adding Articles

1. Create a new folder in `public/data/` with your article slug (e.g., `my-new-article`)
2. Add an `index.md` file with your article content
3. Add any images to the same folder
4. Update `public/content/articles.json` with your article metadata

### Adding Team Members

1. Add the member's avatar to `public/avatars/`
2. Update `public/content/team.json` with the member's information

### Adding Categories

Update `public/content/categories.json` to add new categories.

## Troubleshooting

- **Build fails**: Check the Actions tab in GitHub for error logs
- **Images not loading**: Ensure images are in the correct `public/` directory
- **404 errors**: Make sure `output: "export"` is set in `next.config.mjs`

## Support

For issues or questions, please check the repository's Issues section.
