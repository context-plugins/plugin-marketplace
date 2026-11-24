import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AwsCertificateManagerOperationsApi = {
  CertificateManagerRequestCertificate: "CertificateManager.RequestCertificate",
} as const;
export type XAmzTarget1AwsCertificateManagerOperationsApi =
  | (typeof XAmzTarget1AwsCertificateManagerOperationsApi)[keyof typeof XAmzTarget1AwsCertificateManagerOperationsApi]
  | (string & {});

export const xAmzTarget1AwsCertificateManagerOperationsApiSchema: EnumSchema<XAmzTarget1AwsCertificateManagerOperationsApi> =
  s.enumOf<XAmzTarget1AwsCertificateManagerOperationsApi>(XAmzTarget1AwsCertificateManagerOperationsApi);
