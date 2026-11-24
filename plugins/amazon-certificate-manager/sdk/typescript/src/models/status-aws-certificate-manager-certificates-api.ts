import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the certificate. A certificate enters status PENDING_VALIDATION upon being
 * requested, unless it fails for any of the reasons given in the troubleshooting topic Certificate
 * request fails. ACM makes repeated attempts to validate a certificate for 72 hours and then times
 * out. If a certificate shows status FAILED or VALIDATION_TIMED_OUT, delete the request, correct
 * the issue with DNS validation or Email validation, and try again. If validation succeeds, the
 * certificate enters status ISSUED.
 */
export const StatusAwsCertificateManagerCertificatesApi = {
  PendingValidation: "PENDING_VALIDATION",
  Issued: "ISSUED",
  Inactive: "INACTIVE",
  Expired: "EXPIRED",
  ValidationTimedOut: "VALIDATION_TIMED_OUT",
  Revoked: "REVOKED",
  Failed: "FAILED",
} as const;
export type StatusAwsCertificateManagerCertificatesApi =
  | (typeof StatusAwsCertificateManagerCertificatesApi)[keyof typeof StatusAwsCertificateManagerCertificatesApi]
  | (string & {});

export const statusAwsCertificateManagerCertificatesApiSchema: EnumSchema<StatusAwsCertificateManagerCertificatesApi> =
  s.enumOf<StatusAwsCertificateManagerCertificatesApi>(StatusAwsCertificateManagerCertificatesApi);
