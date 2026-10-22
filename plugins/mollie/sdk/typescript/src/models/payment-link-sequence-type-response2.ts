import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * If set to `first`, a payment mandate is established right after a payment is made by the
 * customer.
 *
 * Defaults to `oneoff`, which is a regular payment link and will not establish a mandate after
 * payment.
 *
 * The mandate ID can be retrieved by making a call to the [Payment Link Payments
 * Endpoint](get-payment-link-payments).
 */
export const PaymentLinkSequenceTypeResponse2 = {
  Oneoff: "oneoff",
  First: "first",
} as const;
export type PaymentLinkSequenceTypeResponse2 =
  | (typeof PaymentLinkSequenceTypeResponse2)[keyof typeof PaymentLinkSequenceTypeResponse2]
  | (string & {});

export const paymentLinkSequenceTypeResponse2Schema: EnumSchema<PaymentLinkSequenceTypeResponse2> =
  s.enumOf<PaymentLinkSequenceTypeResponse2>(PaymentLinkSequenceTypeResponse2);
