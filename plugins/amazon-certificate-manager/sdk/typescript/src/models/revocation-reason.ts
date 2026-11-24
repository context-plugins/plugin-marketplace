import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The reason the certificate was revoked. This value exists only when the certificate status is
 * REVOKED.
 */
export const RevocationReason = {
  Unspecified: "UNSPECIFIED",
  KeyCompromise: "KEY_COMPROMISE",
  CaCompromise: "CA_COMPROMISE",
  AffiliationChanged: "AFFILIATION_CHANGED",
  Superceded: "SUPERCEDED",
  Superseded: "SUPERSEDED",
  CessationOfOperation: "CESSATION_OF_OPERATION",
  CertificateHold: "CERTIFICATE_HOLD",
  RemoveFromCrl: "REMOVE_FROM_CRL",
  PrivilegeWithdrawn: "PRIVILEGE_WITHDRAWN",
  AaCompromise: "A_A_COMPROMISE",
} as const;
export type RevocationReason = (typeof RevocationReason)[keyof typeof RevocationReason] | (string & {});

export const revocationReasonSchema: EnumSchema<RevocationReason> =
  s.enumOf<RevocationReason>(RevocationReason);
