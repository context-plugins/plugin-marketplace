import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Card brand. */
export const Paymentcardbrand = {
  Visa: "VISA",
  Mastercard: "MASTERCARD",
  Discover: "DISCOVER",
} as const;
export type Paymentcardbrand = (typeof Paymentcardbrand)[keyof typeof Paymentcardbrand] | (string & {});

export const paymentcardbrandSchema: EnumSchema<Paymentcardbrand> =
  s.enumOf<Paymentcardbrand>(Paymentcardbrand);
