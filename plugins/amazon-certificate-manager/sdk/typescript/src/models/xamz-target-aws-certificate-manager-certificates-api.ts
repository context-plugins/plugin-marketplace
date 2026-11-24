import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAwsCertificateManagerCertificatesApi = {
  CertificateManagerDeleteCertificate: "CertificateManager.DeleteCertificate",
} as const;
export type XAmzTargetAwsCertificateManagerCertificatesApi =
  | (typeof XAmzTargetAwsCertificateManagerCertificatesApi)[keyof typeof XAmzTargetAwsCertificateManagerCertificatesApi]
  | (string & {});

export const xAmzTargetAwsCertificateManagerCertificatesApiSchema: EnumSchema<XAmzTargetAwsCertificateManagerCertificatesApi> =
  s.enumOf<XAmzTargetAwsCertificateManagerCertificatesApi>(XAmzTargetAwsCertificateManagerCertificatesApi);
