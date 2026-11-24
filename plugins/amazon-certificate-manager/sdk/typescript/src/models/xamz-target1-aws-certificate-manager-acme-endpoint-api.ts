import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AwsCertificateManagerAcmeEndpointApi = {
  CertificateManagerDeleteAcmeEndpoint: "CertificateManager.DeleteAcmeEndpoint",
} as const;
export type XAmzTarget1AwsCertificateManagerAcmeEndpointApi =
  | (typeof XAmzTarget1AwsCertificateManagerAcmeEndpointApi)[keyof typeof XAmzTarget1AwsCertificateManagerAcmeEndpointApi]
  | (string & {});

export const xAmzTarget1AwsCertificateManagerAcmeEndpointApiSchema: EnumSchema<XAmzTarget1AwsCertificateManagerAcmeEndpointApi> =
  s.enumOf<XAmzTarget1AwsCertificateManagerAcmeEndpointApi>(XAmzTarget1AwsCertificateManagerAcmeEndpointApi);
