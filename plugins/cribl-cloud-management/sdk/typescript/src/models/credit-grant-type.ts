import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of the credit grant. */
export const CreditGrantType = {
  Refund: "Refund",
  Rollover: "Rollover",
  Purchased: "Purchased",
} as const;
export type CreditGrantType = (typeof CreditGrantType)[keyof typeof CreditGrantType] | (string & {});

export const creditGrantTypeSchema: EnumSchema<CreditGrantType> = s.enumOf<CreditGrantType>(CreditGrantType);
