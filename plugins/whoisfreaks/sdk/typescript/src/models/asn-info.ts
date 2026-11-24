import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { asnPeerSchema, type AsnPeer } from "./asn-peer.js";

export type AsnInfo = {
  asNumber?: string;
  organization?: string;
  country?: string;
  type?: string;
  domain?: string;
  dateAllocated?: string;
  asnName?: string;
  allocationStatus?: string;
  numOfIpv4Routes?: string;
  numOfIpv6Routes?: string;
  rir?: string;
  routes?: string[];
  downstreams?: AsnPeer[];
  upstreams?: AsnPeer[];
  peers?: AsnPeer[];
  whoisResponse?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const asnInfoSchema: Schema<AsnInfo> = s.object<AsnInfo>(
  {
    asNumber: s.optional(s.string()),
    organization: s.optional(s.string()),
    country: s.optional(s.string()),
    type: s.optional(s.string()),
    domain: s.optional(s.string()),
    dateAllocated: s.optional(s.string()),
    asnName: s.optional(s.string()),
    allocationStatus: s.optional(s.string()),
    numOfIpv4Routes: s.optional(s.string()),
    numOfIpv6Routes: s.optional(s.string()),
    rir: s.optional(s.string()),
    routes: s.optional(s.array(s.string())),
    downstreams: s.optional(s.array(s.lazy(() => asnPeerSchema))),
    upstreams: s.optional(s.array(s.lazy(() => asnPeerSchema))),
    peers: s.optional(s.array(s.lazy(() => asnPeerSchema))),
    whoisResponse: s.optional(s.string()),
    _keysMap: {
      asNumber: "as_number",
      dateAllocated: "date_allocated",
      asnName: "asn_name",
      allocationStatus: "allocation_status",
      numOfIpv4Routes: "num_of_ipv4_routes",
      numOfIpv6Routes: "num_of_ipv6_routes",
      whoisResponse: "whois_response",
    },
  },
  { additionalProperties: s.json() },
);
