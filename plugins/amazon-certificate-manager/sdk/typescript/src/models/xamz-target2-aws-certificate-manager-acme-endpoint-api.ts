import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AwsCertificateManagerAcmeEndpointApi = {
  CertificateManagerDescribeAcmeEndpoint: "CertificateManager.DescribeAcmeEndpoint",
} as const;
export type XAmzTarget2AwsCertificateManagerAcmeEndpointApi =
  | (typeof XAmzTarget2AwsCertificateManagerAcmeEndpointApi)[keyof typeof XAmzTarget2AwsCertificateManagerAcmeEndpointApi]
  | (string & {});

export const xAmzTarget2AwsCertificateManagerAcmeEndpointApiSchema: EnumSchema<XAmzTarget2AwsCertificateManagerAcmeEndpointApi> =
  s.enumOf<XAmzTarget2AwsCertificateManagerAcmeEndpointApi>(XAmzTarget2AwsCertificateManagerAcmeEndpointApi);
