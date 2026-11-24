import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAwsCertificateManagerTagApi = {
  CertificateManagerAddTagsToCertificate: "CertificateManager.AddTagsToCertificate",
} as const;
export type XAmzTargetAwsCertificateManagerTagApi =
  | (typeof XAmzTargetAwsCertificateManagerTagApi)[keyof typeof XAmzTargetAwsCertificateManagerTagApi]
  | (string & {});

export const xAmzTargetAwsCertificateManagerTagApiSchema: EnumSchema<XAmzTargetAwsCertificateManagerTagApi> =
  s.enumOf<XAmzTargetAwsCertificateManagerTagApi>(XAmzTargetAwsCertificateManagerTagApi);
