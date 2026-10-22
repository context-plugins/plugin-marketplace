import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the mandate. A status can be `pending` for mandates when the first payment is not
 * yet finalized, or when we did not received the IBAN yet from the first payment.
 */
export const MandateStatus = {
  Valid: "valid",
  Pending: "pending",
  Invalid: "invalid",
} as const;
export type MandateStatus = (typeof MandateStatus)[keyof typeof MandateStatus] | (string & {});

export const mandateStatusSchema: EnumSchema<MandateStatus> = s.enumOf<MandateStatus>(MandateStatus);
