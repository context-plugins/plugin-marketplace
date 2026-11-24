import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AwsCertificateManagerOperationsApi = {
  CertificateManagerGetAccountConfiguration: "CertificateManager.GetAccountConfiguration",
} as const;
export type XAmzTarget3AwsCertificateManagerOperationsApi =
  | (typeof XAmzTarget3AwsCertificateManagerOperationsApi)[keyof typeof XAmzTarget3AwsCertificateManagerOperationsApi]
  | (string & {});

export const xAmzTarget3AwsCertificateManagerOperationsApiSchema: EnumSchema<XAmzTarget3AwsCertificateManagerOperationsApi> =
  s.enumOf<XAmzTarget3AwsCertificateManagerOperationsApi>(XAmzTarget3AwsCertificateManagerOperationsApi);
