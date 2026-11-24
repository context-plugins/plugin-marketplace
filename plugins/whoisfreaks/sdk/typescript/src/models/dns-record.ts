import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Union of all DNS record variants (A/AAAA/MX/NS/CNAME/PTR/TXT/SPF/SOA). */
export type DnsRecord = {
  type?: string;
  name?: string;
  ttl?: number;
  address?: string;
  priority?: number;
  exchange?: string;
  target?: string;
  strings?: string[];
  host?: string;
  admin?: string;
  serial?: number;
  refresh?: number;
  retry?: number;
  expire?: number;
  minimum?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dnsRecordSchema: Schema<DnsRecord> = s.object<DnsRecord>(
  {
    type: s.optional(s.string()),
    name: s.optional(s.string()),
    ttl: s.optional(s.int()),
    address: s.optional(s.string()),
    priority: s.optional(s.int()),
    exchange: s.optional(s.string()),
    target: s.optional(s.string()),
    strings: s.optional(s.array(s.string())),
    host: s.optional(s.string()),
    admin: s.optional(s.string()),
    serial: s.optional(s.int()),
    refresh: s.optional(s.int()),
    retry: s.optional(s.int()),
    expire: s.optional(s.int()),
    minimum: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
