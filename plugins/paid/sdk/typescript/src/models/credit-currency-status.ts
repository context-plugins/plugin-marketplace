import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether this credit currency is active or archived. */
export const CreditCurrencyStatus = {
  Active: "active",
  Archived: "archived",
} as const;
export type CreditCurrencyStatus =
  | (typeof CreditCurrencyStatus)[keyof typeof CreditCurrencyStatus]
  | (string & {});

export const creditCurrencyStatusSchema: EnumSchema<CreditCurrencyStatus> =
  s.enumOf<CreditCurrencyStatus>(CreditCurrencyStatus);
