import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Account type */
export const Type = {
  Transaction: "transaction",
  Savings: "savings",
  CreditCard: "credit-card",
  Mortgage: "mortgage",
  Loan: "loan",
  Investment: "investment",
  TermDeposit: "term-deposit",
  Insurance: "insurance",
  Foreign: "foreign",
  Unknown: "unknown",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
