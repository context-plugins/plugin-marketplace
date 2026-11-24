import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAwsCertificateManagerAcmeEndpointApi = {
  CertificateManagerCreateAcmeEndpoint: "CertificateManager.CreateAcmeEndpoint",
} as const;
export type XAmzTargetAwsCertificateManagerAcmeEndpointApi =
  | (typeof XAmzTargetAwsCertificateManagerAcmeEndpointApi)[keyof typeof XAmzTargetAwsCertificateManagerAcmeEndpointApi]
  | (string & {});

export const xAmzTargetAwsCertificateManagerAcmeEndpointApiSchema: EnumSchema<XAmzTargetAwsCertificateManagerAcmeEndpointApi> =
  s.enumOf<XAmzTargetAwsCertificateManagerAcmeEndpointApi>(XAmzTargetAwsCertificateManagerAcmeEndpointApi);
