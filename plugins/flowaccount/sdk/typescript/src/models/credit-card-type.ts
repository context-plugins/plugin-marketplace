import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 = Personal 3 = Business */
export const CreditCardType = {
  _1: 1,
  _3: 3,
} as const;
export type CreditCardType = (typeof CreditCardType)[keyof typeof CreditCardType] | (number & {});

export const creditCardTypeSchema: EnumSchema<CreditCardType> = s.enumOf<CreditCardType>(CreditCardType);
