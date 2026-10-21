import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The level of security applied during card processing. */
export const PaymentDetailsCardSecurity = {
  Normal: "normal",
  _3Dsecure: "3dsecure",
} as const;
export type PaymentDetailsCardSecurity =
  | (typeof PaymentDetailsCardSecurity)[keyof typeof PaymentDetailsCardSecurity]
  | (string & {});

export const paymentDetailsCardSecuritySchema: EnumSchema<PaymentDetailsCardSecurity> =
  s.enumOf<PaymentDetailsCardSecurity>(PaymentDetailsCardSecurity);
