import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Payment method of the mandate.
 *
 * SEPA Direct Debit and PayPal mandates can be created directly.
 */
export const MandateMethod = {
  Creditcard: "creditcard",
  Directdebit: "directdebit",
  Paypal: "paypal",
} as const;
export type MandateMethod = (typeof MandateMethod)[keyof typeof MandateMethod] | (string & {});

export const mandateMethodSchema: EnumSchema<MandateMethod> = s.enumOf<MandateMethod>(MandateMethod);
