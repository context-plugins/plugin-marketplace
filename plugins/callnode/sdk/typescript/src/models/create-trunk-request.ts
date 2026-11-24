import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { egressTransportSchema, type EgressTransport } from "./egress-transport.js";

/**
 * Provide `name` plus at least one direction's config — an `egressHost` (egress), one or more
 * `allowedIps` (IP-authenticated ingress), or `registrationEnabled: true` (registration ingress). A
 * request with none of them is rejected with `no_config`.
 */
export type CreateTrunkRequest = {
  name: string;
  /**
   * Hostname or IP of your SIP endpoint. Setting it enables egress delivery. Must be a public host.
   */
  egressHost?: string;
  /** Defaults to 5060, or 5061 when `egressTransport` is `tls`. @default 5060 */
  egressPort?: number;
  egressTransport?: EgressTransport;
  /** Public IPv4 source IPs for ingress. */
  allowedIps?: string[];
  ingressEnabled?: boolean;
  /**
   * Create a registration trunk for a PBX with no static public IP: your PBX registers to CallNode
   * over TLS instead of being allow-listed by address, and calls we place to you go to whatever
   * contact it last registered from. The response carries `sipPassword` once.
   */
  registrationEnabled?: boolean;
  /** One of your numbers' ids — the default ingress agent. */
  defaultPhoneNumberId?: string;
  /**
   * One of your numbers' ids — caller ID presented on termination calls when the From is not an
   * owned number.
   */
  outboundCliNumberId?: string;
  /**
   * Set true to acknowledge your plan's additional-trunk fee when you are beyond the included
   * count.
   */
  confirmMonthlyFee?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createTrunkRequestProperties: s.Shape<CreateTrunkRequest> = {
  name: s.string(),
  egressHost: s.optional(s.string()),
  egressPort: s.defaulted(s.int(), 5060),
  egressTransport: s.optional(s.lazy(() => egressTransportSchema)),
  allowedIps: s.optional(s.array(s.string())),
  ingressEnabled: s.optional(s.boolean()),
  registrationEnabled: s.optional(s.boolean()),
  defaultPhoneNumberId: s.optional(s.string()),
  outboundCliNumberId: s.optional(s.string()),
  confirmMonthlyFee: s.optional(s.boolean()),
};

export const createTrunkRequestInternalSchema: Schema<CreateTrunkRequest> = s.object<CreateTrunkRequest>(
  createTrunkRequestProperties,
  { additionalProperties: s.json() },
);

export const createTrunkRequestSchema: Schema<CreateTrunkRequest> = s.lazySchema(() =>
  s.object<CreateTrunkRequest>(
    {
      ...createTrunkRequestProperties,
      name: s.string().check(s.minLength(1), s.maxLength(64)),
    },
    { additionalProperties: s.json() },
  ),
);
