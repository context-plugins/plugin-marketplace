import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AwsCertificateManagerTagApi = {
  CertificateManagerListTagsForCertificate: "CertificateManager.ListTagsForCertificate",
} as const;
export type XAmzTarget1AwsCertificateManagerTagApi =
  | (typeof XAmzTarget1AwsCertificateManagerTagApi)[keyof typeof XAmzTarget1AwsCertificateManagerTagApi]
  | (string & {});

export const xAmzTarget1AwsCertificateManagerTagApiSchema: EnumSchema<XAmzTarget1AwsCertificateManagerTagApi> =
  s.enumOf<XAmzTarget1AwsCertificateManagerTagApi>(XAmzTarget1AwsCertificateManagerTagApi);
