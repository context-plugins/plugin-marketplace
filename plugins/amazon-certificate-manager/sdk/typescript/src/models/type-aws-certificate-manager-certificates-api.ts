import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The source of the certificate. For certificates provided by ACM, this value is AMAZON_ISSUED. For
 * certificates that you imported with ImportCertificate, this value is IMPORTED. ACM does not
 * provide managed renewal for imported certificates. For more information about the differences
 * between certificates that you import and those that ACM provides, see Importing Certificates in
 * the Certificate Manager User Guide.
 */
export const TypeAwsCertificateManagerCertificatesApi = {
  Imported: "IMPORTED",
  AmazonIssued: "AMAZON_ISSUED",
  Private: "PRIVATE",
} as const;
export type TypeAwsCertificateManagerCertificatesApi =
  | (typeof TypeAwsCertificateManagerCertificatesApi)[keyof typeof TypeAwsCertificateManagerCertificatesApi]
  | (string & {});

export const typeAwsCertificateManagerCertificatesApiSchema: EnumSchema<TypeAwsCertificateManagerCertificatesApi> =
  s.enumOf<TypeAwsCertificateManagerCertificatesApi>(TypeAwsCertificateManagerCertificatesApi);
