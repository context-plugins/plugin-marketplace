import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget4AwsCertificateManagerAcmeEndpointApi = {
  CertificateManagerUpdateAcmeEndpoint: "CertificateManager.UpdateAcmeEndpoint",
} as const;
export type XAmzTarget4AwsCertificateManagerAcmeEndpointApi =
  | (typeof XAmzTarget4AwsCertificateManagerAcmeEndpointApi)[keyof typeof XAmzTarget4AwsCertificateManagerAcmeEndpointApi]
  | (string & {});

export const xAmzTarget4AwsCertificateManagerAcmeEndpointApiSchema: EnumSchema<XAmzTarget4AwsCertificateManagerAcmeEndpointApi> =
  s.enumOf<XAmzTarget4AwsCertificateManagerAcmeEndpointApi>(XAmzTarget4AwsCertificateManagerAcmeEndpointApi);
