import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AwsCertificateManagerCertificatesApi = {
  CertificateManagerDescribeCertificate: "CertificateManager.DescribeCertificate",
} as const;
export type XAmzTarget1AwsCertificateManagerCertificatesApi =
  | (typeof XAmzTarget1AwsCertificateManagerCertificatesApi)[keyof typeof XAmzTarget1AwsCertificateManagerCertificatesApi]
  | (string & {});

export const xAmzTarget1AwsCertificateManagerCertificatesApiSchema: EnumSchema<XAmzTarget1AwsCertificateManagerCertificatesApi> =
  s.enumOf<XAmzTarget1AwsCertificateManagerCertificatesApi>(XAmzTarget1AwsCertificateManagerCertificatesApi);
