import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The reason for the failure. */
export const Reason = {
  AccessDenied: "ACCESS_DENIED",
  DomainMismatch: "DOMAIN_MISMATCH",
  DomainNotAllowed: "DOMAIN_NOT_ALLOWED",
  EndpointNotActive: "ENDPOINT_NOT_ACTIVE",
  HostedZoneNotFound: "HOSTED_ZONE_NOT_FOUND",
  InternalFailure: "INTERNAL_FAILURE",
  InvalidChangeBatch: "INVALID_CHANGE_BATCH",
  InvalidPublicDomain: "INVALID_PUBLIC_DOMAIN",
  TimedOut: "TIMED_OUT",
} as const;
export type Reason = (typeof Reason)[keyof typeof Reason] | (string & {});

export const reasonSchema: EnumSchema<Reason> = s.enumOf<Reason>(Reason);
