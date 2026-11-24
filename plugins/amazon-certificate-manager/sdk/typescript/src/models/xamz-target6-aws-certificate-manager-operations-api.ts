import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget6AwsCertificateManagerOperationsApi = {
  CertificateManagerListCertificateDomainValidations: "CertificateManager.ListCertificateDomainValidations",
} as const;
export type XAmzTarget6AwsCertificateManagerOperationsApi =
  | (typeof XAmzTarget6AwsCertificateManagerOperationsApi)[keyof typeof XAmzTarget6AwsCertificateManagerOperationsApi]
  | (string & {});

export const xAmzTarget6AwsCertificateManagerOperationsApiSchema: EnumSchema<XAmzTarget6AwsCertificateManagerOperationsApi> =
  s.enumOf<XAmzTarget6AwsCertificateManagerOperationsApi>(XAmzTarget6AwsCertificateManagerOperationsApi);
