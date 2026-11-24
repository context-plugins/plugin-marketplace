import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies why you revoked the certificate. */
export const RevocationReason1 = {
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
export type RevocationReason1 = (typeof RevocationReason1)[keyof typeof RevocationReason1] | (string & {});

export const revocationReason1Schema: EnumSchema<RevocationReason1> =
  s.enumOf<RevocationReason1>(RevocationReason1);
