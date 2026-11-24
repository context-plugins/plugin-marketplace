import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AwsCertificateManagerCertificatesApi = {
  CertificateManagerGetCertificate: "CertificateManager.GetCertificate",
} as const;
export type XAmzTarget3AwsCertificateManagerCertificatesApi =
  | (typeof XAmzTarget3AwsCertificateManagerCertificatesApi)[keyof typeof XAmzTarget3AwsCertificateManagerCertificatesApi]
  | (string & {});

export const xAmzTarget3AwsCertificateManagerCertificatesApiSchema: EnumSchema<XAmzTarget3AwsCertificateManagerCertificatesApi> =
  s.enumOf<XAmzTarget3AwsCertificateManagerCertificatesApi>(XAmzTarget3AwsCertificateManagerCertificatesApi);
