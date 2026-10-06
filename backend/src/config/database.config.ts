export const databaseConfig = {
  provider: "PostgreSQL",
  orm: "Prisma",
  url: process.env.DATABASE_URL ?? ""
};
