import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the field to sort results by. Valid values are CREATED_AT, NOT_AFTER, STATUS,
 * RENEWAL_STATUS, EXPORTED, IN_USE, NOT_BEFORE, KEY_ALGORITHM, TYPE, CERTIFICATE_ARN, COMMON_NAME,
 * REVOKED_AT, RENEWAL_ELIGIBILITY, ISSUED_AT, MANAGED_BY, EXPORT_OPTION, VALIDATION_METHOD, and
 * IMPORTED_AT.
 */
export const SortBy1 = {
  CreatedAt: "CREATED_AT",
  NotAfter: "NOT_AFTER",
  Status: "STATUS",
  RenewalStatus: "RENEWAL_STATUS",
  Exported: "EXPORTED",
  InUse: "IN_USE",
  NotBefore: "NOT_BEFORE",
  KeyAlgorithm: "KEY_ALGORITHM",
  Type: "TYPE",
  CertificateArn: "CERTIFICATE_ARN",
  CommonName: "COMMON_NAME",
  RevokedAt: "REVOKED_AT",
  RenewalEligibility: "RENEWAL_ELIGIBILITY",
  IssuedAt: "ISSUED_AT",
  ManagedBy: "MANAGED_BY",
  ExportOption: "EXPORT_OPTION",
  ValidationMethod: "VALIDATION_METHOD",
  ImportedAt: "IMPORTED_AT",
  AcmeEndpointArn: "ACME_ENDPOINT_ARN",
  AcmeAccountId: "ACME_ACCOUNT_ID",
  CertificateKeyPairOrigin: "CERTIFICATE_KEY_PAIR_ORIGIN",
} as const;
export type SortBy1 = (typeof SortBy1)[keyof typeof SortBy1] | (string & {});

export const sortBy1Schema: EnumSchema<SortBy1> = s.enumOf<SortBy1>(SortBy1);
