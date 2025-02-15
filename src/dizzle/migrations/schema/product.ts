import { createdAt, id, updateAt } from "@/dizzle/schemaHelper";
import { relations } from "drizzle-orm";
import { integer, pgEnum, pgTable, text } from "drizzle-orm/pg-core";
import { CourseProductTable } from "./courseProduct";

export const productStatuses = ['private', 'public'] as const;
export type ProductStatuses = (typeof productStatuses)[number]
export const productStatusesEnum = pgEnum("product_status", productStatuses);
export const ProductTable = pgTable("products", {
    id,
    name: text().notNull(),
    description: text().notNull(),
    imageUrl: text().notNull(),
    priceInDollars: integer().notNull(),
    status: productStatusesEnum().notNull().default("private"),
    createdAt,
    updateAt
})

export const ProductRelationships = relations(ProductTable,({many}) => ({
    courseProducts: many(CourseProductTable)
}))