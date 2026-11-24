import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { watchlistSummarySchema, type WatchlistSummary } from "./watchlist-summary.js";

export type ApiV1WatchlistsResponse = {
  watchlists: WatchlistSummary[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1WatchlistsResponseSchema: Schema<ApiV1WatchlistsResponse> =
  s.object<ApiV1WatchlistsResponse>(
    {
      watchlists: s.array(s.lazy(() => watchlistSummarySchema)),
    },
    { additionalProperties: s.json() },
  );
