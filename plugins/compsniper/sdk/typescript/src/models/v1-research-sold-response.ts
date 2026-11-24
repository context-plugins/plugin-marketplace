import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resultSchema, type Result } from "./result.js";
import {
  totalsCompSniperMarketplaceAndShippingSoldHistoryApiSchema,
  type TotalsCompSniperMarketplaceAndShippingSoldHistoryApi,
} from "./totals-comp-sniper-marketplace-and-shipping-sold-history-api.js";

export type V1ResearchSoldResponse = {
  source?: string;
  ebaySite?: string;
  displayCurrency?: string;
  startDate?: string;
  endDate?: string;
  page?: number;
  limit?: number;
  sourceResultCount?: number;
  resultCount?: number;
  hasNextPage?: boolean;
  nextPage?: number | null;
  relevanceApplied?: boolean;
  /**
   * Whole-search totals for the date range (same on every page, before relevance cleanup or
   * singleUnitOnly). totalSold is an upper bound on the number of rows. Null when there are no
   * sales.
   */
  totals?: TotalsCompSniperMarketplaceAndShippingSoldHistoryApi | null;
  warnings?: string[];
  requestId?: string;
  results?: Result[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1ResearchSoldResponseSchema: Schema<V1ResearchSoldResponse> = s.object<V1ResearchSoldResponse>(
  {
    source: s.optional(s.string()),
    ebaySite: s.optional(s.string()),
    displayCurrency: s.optional(s.string()),
    startDate: s.optional(s.string()),
    endDate: s.optional(s.string()),
    page: s.optional(s.int()),
    limit: s.optional(s.int()),
    sourceResultCount: s.optional(s.int()),
    resultCount: s.optional(s.int()),
    hasNextPage: s.optional(s.boolean()),
    nextPage: s.optionalNullable(s.int()),
    relevanceApplied: s.optional(s.boolean()),
    totals: s.optionalNullable(s.lazy(() => totalsCompSniperMarketplaceAndShippingSoldHistoryApiSchema)),
    warnings: s.optional(s.array(s.string())),
    requestId: s.optional(s.string()),
    results: s.optional(s.array(s.lazy(() => resultSchema))),
  },
  { additionalProperties: s.json() },
);
