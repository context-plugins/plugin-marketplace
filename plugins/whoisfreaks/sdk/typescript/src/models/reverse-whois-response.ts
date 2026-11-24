import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { whoisHistoricalItemSchema, type WhoisHistoricalItem } from "./whois-historical-item.js";

/**
 * Reverse WHOIS response. Pagination keys are capitalized (Total_Result/Total_Pages/Current_Page)
 * as returned by the API.
 */
export type ReverseWhoisResponse = {
  totalResult?: number;
  totalPages?: number;
  currentPage?: number;
  whoisDomainsHistorical?: WhoisHistoricalItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reverseWhoisResponseSchema: Schema<ReverseWhoisResponse> = s.object<ReverseWhoisResponse>(
  {
    totalResult: s.optional(s.int()),
    totalPages: s.optional(s.int()),
    currentPage: s.optional(s.int()),
    whoisDomainsHistorical: s.optional(s.array(s.lazy(() => whoisHistoricalItemSchema))),
    _keysMap: {
      totalResult: "Total_Result",
      totalPages: "Total_Pages",
      currentPage: "Current_Page",
      whoisDomainsHistorical: "whois_domains_historical",
    },
  },
  { additionalProperties: s.json() },
);
