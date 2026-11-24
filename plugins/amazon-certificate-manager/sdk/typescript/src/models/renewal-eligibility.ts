import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies whether the certificate is eligible for renewal. At this time, only exported private
 * certificates can be renewed with the RenewCertificate command.
 */
export const RenewalEligibility = {
  Eligible: "ELIGIBLE",
  Ineligible: "INELIGIBLE",
} as const;
export type RenewalEligibility = (typeof RenewalEligibility)[keyof typeof RenewalEligibility] | (string & {});

export const renewalEligibilitySchema: EnumSchema<RenewalEligibility> =
  s.enumOf<RenewalEligibility>(RenewalEligibility);
