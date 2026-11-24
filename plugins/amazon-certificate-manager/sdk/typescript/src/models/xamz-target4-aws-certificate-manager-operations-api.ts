import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget4AwsCertificateManagerOperationsApi = {
  CertificateManagerPutAccountConfiguration: "CertificateManager.PutAccountConfiguration",
} as const;
export type XAmzTarget4AwsCertificateManagerOperationsApi =
  | (typeof XAmzTarget4AwsCertificateManagerOperationsApi)[keyof typeof XAmzTarget4AwsCertificateManagerOperationsApi]
  | (string & {});

export const xAmzTarget4AwsCertificateManagerOperationsApiSchema: EnumSchema<XAmzTarget4AwsCertificateManagerOperationsApi> =
  s.enumOf<XAmzTarget4AwsCertificateManagerOperationsApi>(XAmzTarget4AwsCertificateManagerOperationsApi);
