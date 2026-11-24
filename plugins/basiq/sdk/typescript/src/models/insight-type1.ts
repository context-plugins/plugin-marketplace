import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of insight: account verification, balance verification, identity verification, income
 * verification, or expense-ratio
 */
export const InsightType1 = {
  Account: "account",
  Balance: "balance",
  Identity: "identity",
  Income: "income",
  ExpenseRatio: "expense-ratio",
} as const;
export type InsightType1 = (typeof InsightType1)[keyof typeof InsightType1] | (string & {});

export const insightType1Schema: EnumSchema<InsightType1> = s.enumOf<InsightType1>(InsightType1);
