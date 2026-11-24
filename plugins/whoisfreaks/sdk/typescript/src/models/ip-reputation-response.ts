import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ipLocationSchema, type IpLocation } from "./ip-location.js";
import { ipSecurityAsnSchema, type IpSecurityAsn } from "./ip-security-asn.js";
import { ipSecurityNetworkSchema, type IpSecurityNetwork } from "./ip-security-network.js";
import { ipSecuritySchema, type IpSecurity } from "./ip-security.js";

export type IpReputationResponse = {
  ip?: string;
  location?: IpLocation;
  network?: IpSecurityNetwork;
  asn?: IpSecurityAsn;
  security?: IpSecurity;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ipReputationResponseSchema: Schema<IpReputationResponse> = s.object<IpReputationResponse>(
  {
    ip: s.optional(s.string()),
    location: s.optional(s.lazy(() => ipLocationSchema)),
    network: s.optional(s.lazy(() => ipSecurityNetworkSchema)),
    asn: s.optional(s.lazy(() => ipSecurityAsnSchema)),
    security: s.optional(s.lazy(() => ipSecuritySchema)),
  },
  { additionalProperties: s.json() },
);
