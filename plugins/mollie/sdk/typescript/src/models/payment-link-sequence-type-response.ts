import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentLinkSequenceTypeResponse = {
  Oneoff: "oneoff",
  First: "first",
} as const;
export type PaymentLinkSequenceTypeResponse =
  | (typeof PaymentLinkSequenceTypeResponse)[keyof typeof PaymentLinkSequenceTypeResponse]
  | (string & {});

export const paymentLinkSequenceTypeResponseSchema: EnumSchema<PaymentLinkSequenceTypeResponse> =
  s.enumOf<PaymentLinkSequenceTypeResponse>(PaymentLinkSequenceTypeResponse);
