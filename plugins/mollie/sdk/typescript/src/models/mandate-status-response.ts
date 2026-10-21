import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the mandate. A status can be `pending` for mandates when the first payment is not
 * yet finalized, or when we did not received the IBAN yet from the first payment.
 */
export const MandateStatusResponse = {
  Valid: "valid",
  Pending: "pending",
  Invalid: "invalid",
} as const;
export type MandateStatusResponse =
  | (typeof MandateStatusResponse)[keyof typeof MandateStatusResponse]
  | (string & {});

export const mandateStatusResponseSchema: EnumSchema<MandateStatusResponse> =
  s.enumOf<MandateStatusResponse>(MandateStatusResponse);
