import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companySummarySchema, type CompanySummary } from "./company-summary.js";
import { paginationSchema, type Pagination } from "./pagination.js";
import { watchlistSummarySchema, type WatchlistSummary } from "./watchlist-summary.js";

export type ApiV1WatchlistsResponse1 = {
  watchlist: WatchlistSummary;
  companies: CompanySummary[];
  pagination?: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1WatchlistsResponse1Schema: Schema<ApiV1WatchlistsResponse1> =
  s.object<ApiV1WatchlistsResponse1>(
    {
      watchlist: watchlistSummarySchema,
      companies: s.array(s.lazy(() => companySummarySchema)),
      pagination: s.optional(s.lazy(() => paginationSchema)),
    },
    { additionalProperties: s.json() },
  );
