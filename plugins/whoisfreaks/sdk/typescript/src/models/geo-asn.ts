import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GeoAsn = {
  asNumber?: string;
  organization?: string;
  country?: string;
  asnName?: string;
  type?: string;
  domain?: string;
  dateAllocated?: string;
  allocationStatus?: string;
  numOfIpv4Routes?: string;
  numOfIpv6Routes?: string;
  rir?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const geoAsnSchema: Schema<GeoAsn> = s.object<GeoAsn>(
  {
    asNumber: s.optional(s.string()),
    organization: s.optional(s.string()),
    country: s.optional(s.string()),
    asnName: s.optional(s.string()),
    type: s.optional(s.string()),
    domain: s.optional(s.string()),
    dateAllocated: s.optional(s.string()),
    allocationStatus: s.optional(s.string()),
    numOfIpv4Routes: s.optional(s.string()),
    numOfIpv6Routes: s.optional(s.string()),
    rir: s.optional(s.string()),
    _keysMap: {
      asNumber: "as_number",
      asnName: "asn_name",
      dateAllocated: "date_allocated",
      allocationStatus: "allocation_status",
      numOfIpv4Routes: "num_of_ipv4_routes",
      numOfIpv6Routes: "num_of_ipv6_routes",
    },
  },
  { additionalProperties: s.json() },
);
