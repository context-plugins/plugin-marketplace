import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { subdomainSchema, type Subdomain } from "./subdomain.js";

export type SubdomainsResponse = {
  domain?: string;
  status?: boolean;
  currentPage?: number;
  totalPages?: number;
  queryTime?: string;
  totalRecords?: number;
  subdomains?: Subdomain[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subdomainsResponseSchema: Schema<SubdomainsResponse> = s.object<SubdomainsResponse>(
  {
    domain: s.optional(s.string()),
    status: s.optional(s.boolean()),
    currentPage: s.optional(s.int()),
    totalPages: s.optional(s.int()),
    queryTime: s.optional(s.string()),
    totalRecords: s.optional(s.int()),
    subdomains: s.optional(s.array(s.lazy(() => subdomainSchema))),
    _keysMap: {
      currentPage: "current_page",
      totalPages: "total_pages",
      queryTime: "query_time",
      totalRecords: "total_records",
    },
  },
  { additionalProperties: s.json() },
);
