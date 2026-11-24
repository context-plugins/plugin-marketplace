import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dnsResponseSchema, type DnsResponse } from "./dns-response.js";

/** Note: 'currenPage' spelling matches the API. */
export type HistoricalDnsResponse = {
  totalPages?: number;
  currenPage?: number;
  totalRecords?: number;
  historicalDns?: DnsResponse[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const historicalDnsResponseSchema: Schema<HistoricalDnsResponse> = s.object<HistoricalDnsResponse>(
  {
    totalPages: s.optional(s.int()),
    currenPage: s.optional(s.int()),
    totalRecords: s.optional(s.int()),
    historicalDns: s.optional(s.array(s.lazy(() => dnsResponseSchema))),
  },
  { additionalProperties: s.json() },
);
