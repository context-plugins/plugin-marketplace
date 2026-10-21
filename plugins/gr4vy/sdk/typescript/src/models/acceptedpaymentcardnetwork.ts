import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Acceptedpaymentcardnetwork = {
  Visa: "VISA",
  Mastercard: "MASTERCARD",
} as const;
export type Acceptedpaymentcardnetwork =
  | (typeof Acceptedpaymentcardnetwork)[keyof typeof Acceptedpaymentcardnetwork]
  | (string & {});

export const acceptedpaymentcardnetworkSchema: EnumSchema<Acceptedpaymentcardnetwork> =
  s.enumOf<Acceptedpaymentcardnetwork>(Acceptedpaymentcardnetwork);
