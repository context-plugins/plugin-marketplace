import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Card Account response type. */
export const CardAccountType = {
  Undefined: "UNDEFINED",
  CreditCard: "CREDIT_CARD",
  DebitCard: "DEBIT_CARD",
  PrepaidCard: "PREPAID_CARD",
  Unknown: "UNKNOWN",
} as const;
export type CardAccountType = (typeof CardAccountType)[keyof typeof CardAccountType] | (string & {});

export const cardAccountTypeSchema: EnumSchema<CardAccountType> = s.enumOf<CardAccountType>(CardAccountType);
