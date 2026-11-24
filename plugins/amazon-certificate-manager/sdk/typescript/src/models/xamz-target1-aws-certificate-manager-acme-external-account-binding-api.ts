import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApi = {
  CertificateManagerDeleteAcmeExternalAccountBinding: "CertificateManager.DeleteAcmeExternalAccountBinding",
} as const;
export type XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApi =
  | (typeof XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApi)[keyof typeof XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApi]
  | (string & {});

export const xAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApiSchema: EnumSchema<XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApi> =
  s.enumOf<XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApi>(
    XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApi,
  );
