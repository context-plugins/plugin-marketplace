import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The renewal status of the certificate. */
export const RenewalStatus = {
  PendingAutoRenewal: "PENDING_AUTO_RENEWAL",
  PendingValidation: "PENDING_VALIDATION",
  Success: "SUCCESS",
  Failed: "FAILED",
} as const;
export type RenewalStatus = (typeof RenewalStatus)[keyof typeof RenewalStatus] | (string & {});

export const renewalStatusSchema: EnumSchema<RenewalStatus> = s.enumOf<RenewalStatus>(RenewalStatus);
