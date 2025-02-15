import { createdAt, id, updateAt } from "@/dizzle/schemaHelper";
import { relations } from "drizzle-orm";
import { pgTable, text } from "drizzle-orm/pg-core";
import { CourseProductTable } from "./courseProduct";

export const CourseTable = pgTable("courses",{
    id,
    name: text().notNull(),
    description: text().notNull(),
    createdAt,
    updateAt,
   
})

export const CourseRelationShip = relations(CourseTable, ({many}) => ({
    courseProducts: many(CourseProductTable)
}))