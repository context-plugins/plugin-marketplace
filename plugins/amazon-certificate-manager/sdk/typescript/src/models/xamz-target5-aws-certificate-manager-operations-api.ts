import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget5AwsCertificateManagerOperationsApi = {
  CertificateManagerGetAcmeExternalAccountBindingCredentials:
    "CertificateManager.GetAcmeExternalAccountBindingCredentials",
} as const;
export type XAmzTarget5AwsCertificateManagerOperationsApi =
  | (typeof XAmzTarget5AwsCertificateManagerOperationsApi)[keyof typeof XAmzTarget5AwsCertificateManagerOperationsApi]
  | (string & {});

export const xAmzTarget5AwsCertificateManagerOperationsApiSchema: EnumSchema<XAmzTarget5AwsCertificateManagerOperationsApi> =
  s.enumOf<XAmzTarget5AwsCertificateManagerOperationsApi>(XAmzTarget5AwsCertificateManagerOperationsApi);
