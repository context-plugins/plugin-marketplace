import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 = Debit 3 = Credit */
export const FinancialTransactionType = {
  _1: 1,
  _3: 3,
} as const;
export type FinancialTransactionType =
  | (typeof FinancialTransactionType)[keyof typeof FinancialTransactionType]
  | (number & {});

export const financialTransactionTypeSchema: EnumSchema<FinancialTransactionType> =
  s.enumOf<FinancialTransactionType>(FinancialTransactionType);
