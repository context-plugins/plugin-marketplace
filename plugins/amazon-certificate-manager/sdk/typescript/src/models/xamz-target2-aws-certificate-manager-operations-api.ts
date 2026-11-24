import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AwsCertificateManagerOperationsApi = {
  CertificateManagerResendValidationEmail: "CertificateManager.ResendValidationEmail",
} as const;
export type XAmzTarget2AwsCertificateManagerOperationsApi =
  | (typeof XAmzTarget2AwsCertificateManagerOperationsApi)[keyof typeof XAmzTarget2AwsCertificateManagerOperationsApi]
  | (string & {});

export const xAmzTarget2AwsCertificateManagerOperationsApiSchema: EnumSchema<XAmzTarget2AwsCertificateManagerOperationsApi> =
  s.enumOf<XAmzTarget2AwsCertificateManagerOperationsApi>(XAmzTarget2AwsCertificateManagerOperationsApi);
