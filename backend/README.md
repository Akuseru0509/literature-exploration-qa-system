# backend

Backend API generated with init-backend-project.

## Stack

- Framework: Express
- Language: TypeScript
- Database: PostgreSQL
- ORM: Prisma
- Authentication: JWT Auth
- API documentation: None
- Validation: None
- Testing: None

## Installation

```bash
npm install
```

## Environment Variables

Copy `.env.example` to `.env` and update values for your environment.

## Development

```bash
npm run dev
```

The API runs at `http://localhost:3000`.


## Docker

Run the API with Docker instead of the local development command:

```bash
docker compose up --build
```

The API container is available at `http://localhost:3000`.

The Docker Compose setup includes PostgreSQL and configures `DATABASE_URL` for the API service.


## Build

```bash
npm run build
```

## API Endpoints

- `GET /` - Returns API welcome and status information.
- `GET /health` - Returns API health status.

## Folder Structure

```text
src/
  common/
    http/        # Express and Node.js response helpers
    plugins/     # Fastify app plugins
    middlewares/ # Express and Node.js middleware
    utils/
  config/
  modules/
    health/
  app/server entrypoint
```

## Scripts

- `dev` - Run the development server
- `start` - Run the production server
- `build` - Compile TypeScript
- `lint` - Run ESLint
- `format` - Format files with Prettier

## License

MIT
