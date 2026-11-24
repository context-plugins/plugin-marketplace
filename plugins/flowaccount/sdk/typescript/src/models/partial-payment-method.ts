import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 0 = Default 1 = None 3 = Quantity 5 = Price 7 = Percentage 11 = RECPartial */
export const PartialPaymentMethod = {
  _0: 0,
  _1: 1,
  _3: 3,
  _5: 5,
  _7: 7,
  _11: 11,
} as const;
export type PartialPaymentMethod =
  | (typeof PartialPaymentMethod)[keyof typeof PartialPaymentMethod]
  | (number & {});

export const partialPaymentMethodSchema: EnumSchema<PartialPaymentMethod> =
  s.enumOf<PartialPaymentMethod>(PartialPaymentMethod);
