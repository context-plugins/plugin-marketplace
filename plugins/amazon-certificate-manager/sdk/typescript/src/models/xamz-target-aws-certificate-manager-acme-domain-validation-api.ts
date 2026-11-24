import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAwsCertificateManagerAcmeDomainValidationApi = {
  CertificateManagerCreateAcmeDomainValidation: "CertificateManager.CreateAcmeDomainValidation",
} as const;
export type XAmzTargetAwsCertificateManagerAcmeDomainValidationApi =
  | (typeof XAmzTargetAwsCertificateManagerAcmeDomainValidationApi)[keyof typeof XAmzTargetAwsCertificateManagerAcmeDomainValidationApi]
  | (string & {});

export const xAmzTargetAwsCertificateManagerAcmeDomainValidationApiSchema: EnumSchema<XAmzTargetAwsCertificateManagerAcmeDomainValidationApi> =
  s.enumOf<XAmzTargetAwsCertificateManagerAcmeDomainValidationApi>(
    XAmzTargetAwsCertificateManagerAcmeDomainValidationApi,
  );
