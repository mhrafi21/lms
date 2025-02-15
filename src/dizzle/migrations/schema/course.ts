import { createdAt, id, updateAt } from "@/dizzle/schemaHelper";
import { relations } from "drizzle-orm";
import { pgTable, text } from "drizzle-orm/pg-core";

export const CourseTable = pgTable("courses",{
    id,
    name: text().notNull(),
    description: text().notNull(),
    createdAt,
    updateAt,
   
})

export const CourseRelationShip = relations(CourseTable, ({}) => ({
    test: one()
}))