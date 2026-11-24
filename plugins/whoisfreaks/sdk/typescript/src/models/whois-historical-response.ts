import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { whoisHistoricalItemSchema, type WhoisHistoricalItem } from "./whois-historical-item.js";

export type WhoisHistoricalResponse = {
  status?: boolean;
  whois?: string;
  totalRecords?: string;
  whoisDomainsHistorical?: WhoisHistoricalItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const whoisHistoricalResponseSchema: Schema<WhoisHistoricalResponse> =
  s.object<WhoisHistoricalResponse>(
    {
      status: s.optional(s.boolean()),
      whois: s.optional(s.string()),
      totalRecords: s.optional(s.string()),
      whoisDomainsHistorical: s.optional(s.array(s.lazy(() => whoisHistoricalItemSchema))),
      _keysMap: {
        totalRecords: "total_records",
        whoisDomainsHistorical: "whois_domains_historical",
      },
    },
    { additionalProperties: s.json() },
  );
