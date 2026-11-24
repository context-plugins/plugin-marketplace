import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the domain validation. */
export const StatusAwsCertificateManagerAcmeDomainValidationApi = {
  Validating: "VALIDATING",
  Valid: "VALID",
  Invalid: "INVALID",
  Deleting: "DELETING",
} as const;
export type StatusAwsCertificateManagerAcmeDomainValidationApi =
  | (typeof StatusAwsCertificateManagerAcmeDomainValidationApi)[keyof typeof StatusAwsCertificateManagerAcmeDomainValidationApi]
  | (string & {});

export const statusAwsCertificateManagerAcmeDomainValidationApiSchema: EnumSchema<StatusAwsCertificateManagerAcmeDomainValidationApi> =
  s.enumOf<StatusAwsCertificateManagerAcmeDomainValidationApi>(
    StatusAwsCertificateManagerAcmeDomainValidationApi,
  );
