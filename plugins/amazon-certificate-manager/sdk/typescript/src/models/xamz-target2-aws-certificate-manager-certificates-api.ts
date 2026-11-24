import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AwsCertificateManagerCertificatesApi = {
  CertificateManagerExportCertificate: "CertificateManager.ExportCertificate",
} as const;
export type XAmzTarget2AwsCertificateManagerCertificatesApi =
  | (typeof XAmzTarget2AwsCertificateManagerCertificatesApi)[keyof typeof XAmzTarget2AwsCertificateManagerCertificatesApi]
  | (string & {});

export const xAmzTarget2AwsCertificateManagerCertificatesApiSchema: EnumSchema<XAmzTarget2AwsCertificateManagerCertificatesApi> =
  s.enumOf<XAmzTarget2AwsCertificateManagerCertificatesApi>(XAmzTarget2AwsCertificateManagerCertificatesApi);
