import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Payment method of the mandate.
 *
 * SEPA Direct Debit and PayPal mandates can be created directly.
 */
export const MandateMethodResponse = {
  Creditcard: "creditcard",
  Directdebit: "directdebit",
  Paypal: "paypal",
} as const;
export type MandateMethodResponse =
  | (typeof MandateMethodResponse)[keyof typeof MandateMethodResponse]
  | (string & {});

export const mandateMethodResponseSchema: EnumSchema<MandateMethodResponse> =
  s.enumOf<MandateMethodResponse>(MandateMethodResponse);
