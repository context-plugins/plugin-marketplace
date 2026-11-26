import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The account category */
export const Category = {
  Assets: "Assets",
  Liabilities: "Liabilities",
  Equity: "Equity",
  Income: "Income",
  CostOfGoodsSold: "Cost of Goods Sold",
  Expense: "Expense",
} as const;
export type Category = (typeof Category)[keyof typeof Category] | (string & {});

export const categorySchema: EnumSchema<Category> = s.enumOf<Category>(Category);
