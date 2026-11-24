import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApi = {
  CertificateManagerCreateAcmeExternalAccountBinding: "CertificateManager.CreateAcmeExternalAccountBinding",
} as const;
export type XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApi =
  | (typeof XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApi)[keyof typeof XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApi]
  | (string & {});

export const xAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApiSchema: EnumSchema<XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApi> =
  s.enumOf<XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApi>(
    XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApi,
  );
