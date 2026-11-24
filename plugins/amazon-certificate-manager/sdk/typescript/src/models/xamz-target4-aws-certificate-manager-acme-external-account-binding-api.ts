import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApi = {
  CertificateManagerRevokeAcmeExternalAccountBinding: "CertificateManager.RevokeAcmeExternalAccountBinding",
} as const;
export type XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApi =
  | (typeof XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApi)[keyof typeof XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApi]
  | (string & {});

export const xAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApiSchema: EnumSchema<XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApi> =
  s.enumOf<XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApi>(
    XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApi,
  );
