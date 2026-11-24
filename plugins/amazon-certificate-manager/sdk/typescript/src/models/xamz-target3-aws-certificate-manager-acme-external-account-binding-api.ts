import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApi = {
  CertificateManagerListAcmeExternalAccountBindings: "CertificateManager.ListAcmeExternalAccountBindings",
} as const;
export type XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApi =
  | (typeof XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApi)[keyof typeof XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApi]
  | (string & {});

export const xAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApiSchema: EnumSchema<XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApi> =
  s.enumOf<XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApi>(
    XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApi,
  );
