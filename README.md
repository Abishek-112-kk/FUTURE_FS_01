# Personal Portfolio Website

A portfolio website built with React and Vite to showcase skills, projects, background, and contact information. This site is designed as a professional digital resume and proof of work.

## What’s included

- Professional homepage introducing who I am
- Projects section showcasing work and Future Interns tasks
- About / resume section highlighting skills and tech stack
- Contact section for visitors to reach out
- Responsive design for mobile and desktop

## Tech stack

- React.js
- Vite
- Tailwind CSS
- HTML & CSS
- JavaScript

## Backend requirements

- Node.js – to handle contact forms, APIs, or blog features
- MongoDB – for storing:
  - Contact form messages
  - Blog posts
  - Project updates

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Start the development server

```bash
npm run dev
```

3. (Optional) Start the backend server for contact form storage

```bash
npm run server
```

4. Build for production

```bash
npm run build
```

## Backend setup

- Local MongoDB URI: `mongodb://localhost:27017`
- Database name: `portfolio`
- Contact form API endpoint: `POST /api/contact`
- Health check endpoint: `GET /api/health`

### Environment variables

In `.env.local`:

```env
MONGODB_URI=mongodb://localhost:27017
MONGODB_DB=portfolio
```

## Notes

This repository is updated to reflect a portfolio-style website with real content, project showcases, skill highlights, and contact flow suitable for job or freelance presentation.
