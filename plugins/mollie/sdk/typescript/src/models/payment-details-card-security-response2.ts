import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The level of security applied during card processing.
 *
 * Possible values: `normal` `3dsecure`
 */
export const PaymentDetailsCardSecurityResponse2 = {
  Normal: "normal",
  _3Dsecure: "3dsecure",
} as const;
export type PaymentDetailsCardSecurityResponse2 =
  | (typeof PaymentDetailsCardSecurityResponse2)[keyof typeof PaymentDetailsCardSecurityResponse2]
  | (string & {});

export const paymentDetailsCardSecurityResponse2Schema: EnumSchema<PaymentDetailsCardSecurityResponse2> =
  s.enumOf<PaymentDetailsCardSecurityResponse2>(PaymentDetailsCardSecurityResponse2);
