import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AwsCertificateManagerAcmeEndpointApi = {
  CertificateManagerListAcmeEndpoints: "CertificateManager.ListAcmeEndpoints",
} as const;
export type XAmzTarget3AwsCertificateManagerAcmeEndpointApi =
  | (typeof XAmzTarget3AwsCertificateManagerAcmeEndpointApi)[keyof typeof XAmzTarget3AwsCertificateManagerAcmeEndpointApi]
  | (string & {});

export const xAmzTarget3AwsCertificateManagerAcmeEndpointApiSchema: EnumSchema<XAmzTarget3AwsCertificateManagerAcmeEndpointApi> =
  s.enumOf<XAmzTarget3AwsCertificateManagerAcmeEndpointApi>(XAmzTarget3AwsCertificateManagerAcmeEndpointApi);
