import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AwsCertificateManagerTagApi = {
  CertificateManagerListTagsForResource: "CertificateManager.ListTagsForResource",
} as const;
export type XAmzTarget2AwsCertificateManagerTagApi =
  | (typeof XAmzTarget2AwsCertificateManagerTagApi)[keyof typeof XAmzTarget2AwsCertificateManagerTagApi]
  | (string & {});

export const xAmzTarget2AwsCertificateManagerTagApiSchema: EnumSchema<XAmzTarget2AwsCertificateManagerTagApi> =
  s.enumOf<XAmzTarget2AwsCertificateManagerTagApi>(XAmzTarget2AwsCertificateManagerTagApi);
