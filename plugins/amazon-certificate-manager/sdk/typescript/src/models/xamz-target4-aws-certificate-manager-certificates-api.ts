import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget4AwsCertificateManagerCertificatesApi = {
  CertificateManagerImportCertificate: "CertificateManager.ImportCertificate",
} as const;
export type XAmzTarget4AwsCertificateManagerCertificatesApi =
  | (typeof XAmzTarget4AwsCertificateManagerCertificatesApi)[keyof typeof XAmzTarget4AwsCertificateManagerCertificatesApi]
  | (string & {});

export const xAmzTarget4AwsCertificateManagerCertificatesApiSchema: EnumSchema<XAmzTarget4AwsCertificateManagerCertificatesApi> =
  s.enumOf<XAmzTarget4AwsCertificateManagerCertificatesApi>(XAmzTarget4AwsCertificateManagerCertificatesApi);
