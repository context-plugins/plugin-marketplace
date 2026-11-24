import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dnsResponseSchema, type DnsResponse } from "./dns-response.js";

export type ReverseDnsResponse = {
  totalRecords?: number;
  totalPages?: number;
  currentPage?: number;
  reverseDnsRecords?: DnsResponse[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reverseDnsResponseSchema: Schema<ReverseDnsResponse> = s.object<ReverseDnsResponse>(
  {
    totalRecords: s.optional(s.int()),
    totalPages: s.optional(s.int()),
    currentPage: s.optional(s.int()),
    reverseDnsRecords: s.optional(s.array(s.lazy(() => dnsResponseSchema))),
  },
  { additionalProperties: s.json() },
);
