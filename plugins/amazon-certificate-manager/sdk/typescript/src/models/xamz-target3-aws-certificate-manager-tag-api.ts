import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AwsCertificateManagerTagApi = {
  CertificateManagerRemoveTagsFromCertificate: "CertificateManager.RemoveTagsFromCertificate",
} as const;
export type XAmzTarget3AwsCertificateManagerTagApi =
  | (typeof XAmzTarget3AwsCertificateManagerTagApi)[keyof typeof XAmzTarget3AwsCertificateManagerTagApi]
  | (string & {});

export const xAmzTarget3AwsCertificateManagerTagApiSchema: EnumSchema<XAmzTarget3AwsCertificateManagerTagApi> =
  s.enumOf<XAmzTarget3AwsCertificateManagerTagApi>(XAmzTarget3AwsCertificateManagerTagApi);
