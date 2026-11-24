import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAwsCertificateManagerOperationsApi = {
  CertificateManagerRenewCertificate: "CertificateManager.RenewCertificate",
} as const;
export type XAmzTargetAwsCertificateManagerOperationsApi =
  | (typeof XAmzTargetAwsCertificateManagerOperationsApi)[keyof typeof XAmzTargetAwsCertificateManagerOperationsApi]
  | (string & {});

export const xAmzTargetAwsCertificateManagerOperationsApiSchema: EnumSchema<XAmzTargetAwsCertificateManagerOperationsApi> =
  s.enumOf<XAmzTargetAwsCertificateManagerOperationsApi>(XAmzTargetAwsCertificateManagerOperationsApi);
