import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget7AwsCertificateManagerOperationsApi = {
  CertificateManagerTagResource: "CertificateManager.TagResource",
} as const;
export type XAmzTarget7AwsCertificateManagerOperationsApi =
  | (typeof XAmzTarget7AwsCertificateManagerOperationsApi)[keyof typeof XAmzTarget7AwsCertificateManagerOperationsApi]
  | (string & {});

export const xAmzTarget7AwsCertificateManagerOperationsApiSchema: EnumSchema<XAmzTarget7AwsCertificateManagerOperationsApi> =
  s.enumOf<XAmzTarget7AwsCertificateManagerOperationsApi>(XAmzTarget7AwsCertificateManagerOperationsApi);
