import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the ACME endpoint. */
export const StatusAwsCertificateManagerAcmeEndpointApi = {
  Creating: "CREATING",
  Active: "ACTIVE",
  Deleting: "DELETING",
  Failed: "FAILED",
} as const;
export type StatusAwsCertificateManagerAcmeEndpointApi =
  | (typeof StatusAwsCertificateManagerAcmeEndpointApi)[keyof typeof StatusAwsCertificateManagerAcmeEndpointApi]
  | (string & {});

export const statusAwsCertificateManagerAcmeEndpointApiSchema: EnumSchema<StatusAwsCertificateManagerAcmeEndpointApi> =
  s.enumOf<StatusAwsCertificateManagerAcmeEndpointApi>(StatusAwsCertificateManagerAcmeEndpointApi);
