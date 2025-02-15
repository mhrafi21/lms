import {defineConfig} from "drizzle-kit"
import { env } from "@/app/data/env/server"
export default defineConfig({

    out: "./src/drizzle/migrations",
    schema: "./src/dizzle/schema.ts",
    verbose: true,
    strict: true,
    dialect: "postgresql",
    dbCredentials: {
        password:  env.DB_PASSWORD,
        user: env.DB_USER,
        database: env.DB_NAME,
        host: env.DB_HOST,
        ssl: false
    }

})