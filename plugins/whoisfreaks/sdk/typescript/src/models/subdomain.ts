import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dnsResponseSchema, type DnsResponse } from "./dns-response.js";

export type Subdomain = {
  subdomain?: string;
  firstSeen?: string;
  lastSeen?: string;
  inactiveFrom?: string;
  /** Live DNS response (DnsInfo). */
  dnsRecords?: DnsResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subdomainSchema: Schema<Subdomain> = s.object<Subdomain>(
  {
    subdomain: s.optional(s.string()),
    firstSeen: s.optional(s.string()),
    lastSeen: s.optional(s.string()),
    inactiveFrom: s.optional(s.string()),
    dnsRecords: s.optional(s.lazy(() => dnsResponseSchema)),
    _keysMap: {
      firstSeen: "first_seen",
      lastSeen: "last_seen",
      inactiveFrom: "inactive_from",
      dnsRecords: "dns_records",
    },
  },
  { additionalProperties: s.json() },
);
