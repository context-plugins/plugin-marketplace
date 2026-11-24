import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget8AwsCertificateManagerOperationsApi = {
  CertificateManagerUntagResource: "CertificateManager.UntagResource",
} as const;
export type XAmzTarget8AwsCertificateManagerOperationsApi =
  | (typeof XAmzTarget8AwsCertificateManagerOperationsApi)[keyof typeof XAmzTarget8AwsCertificateManagerOperationsApi]
  | (string & {});

export const xAmzTarget8AwsCertificateManagerOperationsApiSchema: EnumSchema<XAmzTarget8AwsCertificateManagerOperationsApi> =
  s.enumOf<XAmzTarget8AwsCertificateManagerOperationsApi>(XAmzTarget8AwsCertificateManagerOperationsApi);
