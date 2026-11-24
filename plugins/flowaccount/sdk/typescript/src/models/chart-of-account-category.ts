import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 = Assets 2 = Liabilities 3 = Equity 4 = Revenue 5 = Expenses */
export const ChartOfAccountCategory = {
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
} as const;
export type ChartOfAccountCategory =
  | (typeof ChartOfAccountCategory)[keyof typeof ChartOfAccountCategory]
  | (number & {});

export const chartOfAccountCategorySchema: EnumSchema<ChartOfAccountCategory> =
  s.enumOf<ChartOfAccountCategory>(ChartOfAccountCategory);
