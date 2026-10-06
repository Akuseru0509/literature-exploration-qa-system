export const databaseConfig = {
  provider: "PostgreSQL",
  orm: "None",
  url: process.env.DATABASE_URL ?? ""
};
