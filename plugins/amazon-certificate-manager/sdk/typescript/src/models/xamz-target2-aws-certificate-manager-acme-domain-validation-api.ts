import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AwsCertificateManagerAcmeDomainValidationApi = {
  CertificateManagerDescribeAcmeDomainValidation: "CertificateManager.DescribeAcmeDomainValidation",
} as const;
export type XAmzTarget2AwsCertificateManagerAcmeDomainValidationApi =
  | (typeof XAmzTarget2AwsCertificateManagerAcmeDomainValidationApi)[keyof typeof XAmzTarget2AwsCertificateManagerAcmeDomainValidationApi]
  | (string & {});

export const xAmzTarget2AwsCertificateManagerAcmeDomainValidationApiSchema: EnumSchema<XAmzTarget2AwsCertificateManagerAcmeDomainValidationApi> =
  s.enumOf<XAmzTarget2AwsCertificateManagerAcmeDomainValidationApi>(
    XAmzTarget2AwsCertificateManagerAcmeDomainValidationApi,
  );
