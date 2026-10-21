import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The level of security applied during card processing. */
export const PaymentDetailsCardSecurityResponse = {
  Normal: "normal",
  _3Dsecure: "3dsecure",
} as const;
export type PaymentDetailsCardSecurityResponse =
  | (typeof PaymentDetailsCardSecurityResponse)[keyof typeof PaymentDetailsCardSecurityResponse]
  | (string & {});

export const paymentDetailsCardSecurityResponseSchema: EnumSchema<PaymentDetailsCardSecurityResponse> =
  s.enumOf<PaymentDetailsCardSecurityResponse>(PaymentDetailsCardSecurityResponse);
