import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of insight returned */
export const InsightType = {
  ExpenseRatio: "expense-ratio",
  Balance: "balance",
  Account: "account",
  Identity: "identity",
  Income: "income",
} as const;
export type InsightType = (typeof InsightType)[keyof typeof InsightType] | (string & {});

export const insightTypeSchema: EnumSchema<InsightType> = s.enumOf<InsightType>(InsightType);
