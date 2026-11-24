import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CertificateStatus = {
  PendingValidation: "PENDING_VALIDATION",
  Issued: "ISSUED",
  Inactive: "INACTIVE",
  Expired: "EXPIRED",
  ValidationTimedOut: "VALIDATION_TIMED_OUT",
  Revoked: "REVOKED",
  Failed: "FAILED",
} as const;
export type CertificateStatus = (typeof CertificateStatus)[keyof typeof CertificateStatus] | (string & {});

export const certificateStatusSchema: EnumSchema<CertificateStatus> =
  s.enumOf<CertificateStatus>(CertificateStatus);
