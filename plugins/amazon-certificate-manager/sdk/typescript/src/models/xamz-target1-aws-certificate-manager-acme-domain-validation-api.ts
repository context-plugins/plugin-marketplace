import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AwsCertificateManagerAcmeDomainValidationApi = {
  CertificateManagerDeleteAcmeDomainValidation: "CertificateManager.DeleteAcmeDomainValidation",
} as const;
export type XAmzTarget1AwsCertificateManagerAcmeDomainValidationApi =
  | (typeof XAmzTarget1AwsCertificateManagerAcmeDomainValidationApi)[keyof typeof XAmzTarget1AwsCertificateManagerAcmeDomainValidationApi]
  | (string & {});

export const xAmzTarget1AwsCertificateManagerAcmeDomainValidationApiSchema: EnumSchema<XAmzTarget1AwsCertificateManagerAcmeDomainValidationApi> =
  s.enumOf<XAmzTarget1AwsCertificateManagerAcmeDomainValidationApi>(
    XAmzTarget1AwsCertificateManagerAcmeDomainValidationApi,
  );
