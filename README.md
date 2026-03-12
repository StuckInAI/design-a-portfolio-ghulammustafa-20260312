# Portfolio Website

A modern, full-stack portfolio website built with **Next.js 14**, **TypeScript**, **TypeORM**, **SQLite**, and **Tailwind CSS**.

## Features

- 🏠 **Home Page** — Hero section with name, title, introduction, and featured projects
- 👤 **About Page** — Bio, skills with proficiency bars, work experience timeline
- 🚀 **Projects Page** — Filterable grid of projects with search functionality
- 📬 **Contact Page** — Contact form with validation, stored in the database
- 🌙 **Dark/Light Mode** — Persistent theme with system preference detection
- 📱 **Fully Responsive** — Mobile, tablet, and desktop layouts
- ⚡ **Fast & SEO-friendly** — Server-side rendering and metadata support

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Database**: SQLite (via better-sqlite3)
- **ORM**: TypeORM
- **Styling**: Tailwind CSS
- **Deployment**: Docker

## Project Structure

```
portfolio/
├── src/
│   ├── app/          # Next.js App Router pages and API routes
│   ├── components/   # Reusable React components
│   ├── entities/     # TypeORM entities
│   └── lib/          # Database connection and utilities
├── public/           # Static assets
├── Dockerfile
├── docker-compose.yml
└── .env
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm i
   ```

3. **Set up environment variables**
   ```bash
   cp .env .env.local
   # Edit .env.local as needed
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Docker Deployment

### Using Docker Compose (Recommended)

1. **Build and start the container**
   ```bash
   docker-compose up -d --build
   ```

2. **View logs**
   ```bash
   docker-compose logs -f
   ```

3. **Stop the container**
   ```bash
   docker-compose down
   ```

### Using Docker Directly

```bash
# Build the image
docker build -t portfolio .

# Run the container
docker run -d \
  -p 3000:3000 \
  -v portfolio_data:/app/data \
  -e DATABASE_PATH=/app/data/portfolio.sqlite \
  --name portfolio_app \
  portfolio
```

### Coolify Deployment

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. In Coolify, create a new service and connect your repository
3. Set the build pack to **Docker Compose**
4. Add the environment variables from `.env`
5. Deploy!

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `DATABASE_PATH` | `./portfolio.sqlite` | Path to SQLite database file |
| `NEXT_PUBLIC_SITE_TITLE` | `My Portfolio` | Site title shown in browser tab |
| `NEXT_PUBLIC_SITE_DESCRIPTION` | `Full-Stack Developer Portfolio` | Meta description |

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | Get all projects |
| GET | `/api/projects?featured=true` | Get featured projects only |
| GET | `/api/skills` | Get all skills grouped by category |
| POST | `/api/messages` | Submit a contact form message |

## Database

The SQLite database is automatically created and seeded with sample data on first run:

- **6 sample projects** (including featured ones)
- **15 skills** across Frontend, Backend, and Tools categories

The database file is stored at the path specified by `DATABASE_PATH`. When using Docker, it's persisted in a named volume (`portfolio_data`).

## Customization

### Update Personal Information

Edit the following files to customize the portfolio:

- `src/components/Hero.tsx` — Name, title, and introduction
- `src/app/about/page.tsx` — Bio, stats, and work experience
- `src/app/contact/page.tsx` — Contact information and social links
- `src/components/Footer.tsx` — Footer links and social media

### Update Sample Data

Modify the seed data in `src/lib/database.ts` to add your own projects and skills.

## License

MIT License — feel free to use this template for your own portfolio!
