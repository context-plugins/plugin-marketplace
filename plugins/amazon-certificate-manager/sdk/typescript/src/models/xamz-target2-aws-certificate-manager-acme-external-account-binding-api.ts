import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApi = {
  CertificateManagerDescribeAcmeExternalAccountBinding:
    "CertificateManager.DescribeAcmeExternalAccountBinding",
} as const;
export type XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApi =
  | (typeof XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApi)[keyof typeof XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApi]
  | (string & {});

export const xAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApiSchema: EnumSchema<XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApi> =
  s.enumOf<XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApi>(
    XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApi,
  );
