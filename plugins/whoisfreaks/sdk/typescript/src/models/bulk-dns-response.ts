import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dnsResponseSchema, type DnsResponse } from "./dns-response.js";

export type BulkDnsResponse = {
  bulkDnsInfo?: DnsResponse[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bulkDnsResponseSchema: Schema<BulkDnsResponse> = s.object<BulkDnsResponse>(
  {
    bulkDnsInfo: s.optional(s.array(s.lazy(() => dnsResponseSchema))),
    _keysMap: {
      bulkDnsInfo: "bulk_dns_info",
    },
  },
  { additionalProperties: s.json() },
);
