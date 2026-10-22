import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Card network. */
export const Paymentcardnetwork = {
  Visa: "VISA",
  Mastercard: "MASTERCARD",
  Discover: "DISCOVER",
} as const;
export type Paymentcardnetwork = (typeof Paymentcardnetwork)[keyof typeof Paymentcardnetwork] | (string & {});

export const paymentcardnetworkSchema: EnumSchema<Paymentcardnetwork> =
  s.enumOf<Paymentcardnetwork>(Paymentcardnetwork);
