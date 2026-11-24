import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The reason the certificate request failed. This value exists only when the certificate status is
 * FAILED. For more information, see Certificate Request Failed in the Certificate Manager User
 * Guide.
 */
export const FailureReason = {
  NoAvailableContacts: "NO_AVAILABLE_CONTACTS",
  AdditionalVerificationRequired: "ADDITIONAL_VERIFICATION_REQUIRED",
  DomainNotAllowed: "DOMAIN_NOT_ALLOWED",
  InvalidPublicDomain: "INVALID_PUBLIC_DOMAIN",
  DomainValidationDenied: "DOMAIN_VALIDATION_DENIED",
  CaaError: "CAA_ERROR",
  PcaLimitExceeded: "PCA_LIMIT_EXCEEDED",
  PcaInvalidArn: "PCA_INVALID_ARN",
  PcaInvalidState: "PCA_INVALID_STATE",
  PcaRequestFailed: "PCA_REQUEST_FAILED",
  PcaNameConstraintsValidation: "PCA_NAME_CONSTRAINTS_VALIDATION",
  PcaResourceNotFound: "PCA_RESOURCE_NOT_FOUND",
  PcaInvalidArgs: "PCA_INVALID_ARGS",
  PcaInvalidDuration: "PCA_INVALID_DURATION",
  PcaAccessDenied: "PCA_ACCESS_DENIED",
  SlrNotFound: "SLR_NOT_FOUND",
  Other: "OTHER",
} as const;
export type FailureReason = (typeof FailureReason)[keyof typeof FailureReason] | (string & {});

export const failureReasonSchema: EnumSchema<FailureReason> = s.enumOf<FailureReason>(FailureReason);
