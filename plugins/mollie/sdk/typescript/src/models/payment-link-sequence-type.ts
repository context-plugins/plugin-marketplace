import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentLinkSequenceType = {
  Oneoff: "oneoff",
  First: "first",
} as const;
export type PaymentLinkSequenceType =
  | (typeof PaymentLinkSequenceType)[keyof typeof PaymentLinkSequenceType]
  | (string & {});

export const paymentLinkSequenceTypeSchema: EnumSchema<PaymentLinkSequenceType> =
  s.enumOf<PaymentLinkSequenceType>(PaymentLinkSequenceType);
