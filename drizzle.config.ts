import {defineConfig} from "drizzle-kit"
import { env } from "@/app/data/env/server"
export default defineConfig({

    out: "./src/drizzle/migrations",
    schema: "./src/dizzle/schema.ts",
    verbose: true,
    strict: true,
    dbCredentials: {
        password:  env DB_PASSWORD,
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        ssl: false
    }

})