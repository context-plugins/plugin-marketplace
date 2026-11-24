import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companySearchDataSchema, type CompanySearchData } from "./company-search-data.js";

export type CompanySearchResponse = {
  /** The requestId that should be used in Prospecting Enrich request API params */
  requestId?: string;
  /** Current page of search results */
  currentPage?: number;
  /** Page length */
  pageLength?: number;
  /** Total search results */
  totalResults?: number;
  companies?: CompanySearchData[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companySearchResponseSchema: Schema<CompanySearchResponse> = s.object<CompanySearchResponse>(
  {
    requestId: s.optional(s.string()),
    currentPage: s.optional(s.float64()),
    pageLength: s.optional(s.float64()),
    totalResults: s.optional(s.float64()),
    companies: s.optional(s.array(s.lazy(() => companySearchDataSchema))),
  },
  { additionalProperties: s.json() },
);
