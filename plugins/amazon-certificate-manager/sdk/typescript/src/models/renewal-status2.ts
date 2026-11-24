import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of ACM's managed renewal of the certificate. */
export const RenewalStatus2 = {
  PendingAutoRenewal: "PENDING_AUTO_RENEWAL",
  PendingValidation: "PENDING_VALIDATION",
  Success: "SUCCESS",
  Failed: "FAILED",
} as const;
export type RenewalStatus2 = (typeof RenewalStatus2)[keyof typeof RenewalStatus2] | (string & {});

export const renewalStatus2Schema: EnumSchema<RenewalStatus2> = s.enumOf<RenewalStatus2>(RenewalStatus2);
