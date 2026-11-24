import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dnsRecordSchema, type DnsRecord } from "./dns-record.js";

/** Live DNS response (DnsInfo). */
export type DnsResponse = {
  domainName?: string;
  ipAddress?: string;
  queryTime?: string;
  status?: boolean;
  domainRegistered?: boolean;
  dnsTypes?: Record<string, unknown>;
  dnsRecords?: DnsRecord[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dnsResponseSchema: Schema<DnsResponse> = s.object<DnsResponse>(
  {
    domainName: s.optional(s.string()),
    ipAddress: s.optional(s.string()),
    queryTime: s.optional(s.string()),
    status: s.optional(s.boolean()),
    domainRegistered: s.optional(s.boolean()),
    dnsTypes: s.optional(s.record(s.string(), s.unknown())),
    dnsRecords: s.optional(s.array(s.lazy(() => dnsRecordSchema))),
  },
  { additionalProperties: s.json() },
);
