import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates whether the entry is a credit or debit from the perspective of the account holder. */
export const CreditDebitIndicator = {
  Credit: "credit",
  Debit: "debit",
} as const;
export type CreditDebitIndicator =
  | (typeof CreditDebitIndicator)[keyof typeof CreditDebitIndicator]
  | (string & {});

export const creditDebitIndicatorSchema: EnumSchema<CreditDebitIndicator> =
  s.enumOf<CreditDebitIndicator>(CreditDebitIndicator);
