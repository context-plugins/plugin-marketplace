import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sipTrunkSchema, type SipTrunk } from "./sip-trunk.js";

export type ApiV1TrunksResponse = {
  trunks?: SipTrunk[];
  /** Trunks included with your plan at no additional charge. */
  includedSipTrunks?: number;
  /** Your plan's monthly fee for each trunk beyond the included count. */
  additionalTrunkMonthlyFee?: number;
  activeTrunkCount?: number;
  /**
   * The first switch address CallNode originates SIP egress from (kept for older integrations).
   * Allow every address in egressSourceIps.
   */
  egressSourceIp?: string;
  /**
   * Every address CallNode may originate SIP egress from; a call can leave from any of them. Allow
   * all of them on your endpoints.
   */
  egressSourceIps?: string[];
  /** Where an IP-authenticated PBX/SBC sends inbound trunk calls (UDP/TCP). */
  ingressEndpoint?: string;
  /** Where a registration trunk registers and sends calls (TLS only). */
  registrationEndpoint?: string;
  /** SIP domain/realm used for registration trunk credentials. */
  sipRealm?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1TrunksResponseSchema: Schema<ApiV1TrunksResponse> = s.object<ApiV1TrunksResponse>(
  {
    trunks: s.optional(s.array(s.lazy(() => sipTrunkSchema))),
    includedSipTrunks: s.optional(s.int()),
    additionalTrunkMonthlyFee: s.optional(s.float64()),
    activeTrunkCount: s.optional(s.int()),
    egressSourceIp: s.optional(s.string()),
    egressSourceIps: s.optional(s.array(s.string())),
    ingressEndpoint: s.optional(s.string()),
    registrationEndpoint: s.optional(s.string()),
    sipRealm: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
