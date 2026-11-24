import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { watchlistDtoSchema, type WatchlistDto } from "./watchlist-dto.js";

/** Paginated list of watchlists. */
export type WatchlistListResult = {
  /** Total number of matching watchlists across all pages. */
  total: number;
  /** Watchlists returned for the requested page. */
  data: WatchlistDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const watchlistListResultSchema: Schema<WatchlistListResult> = s.object<WatchlistListResult>(
  {
    total: s.int(),
    data: s.array(s.lazy(() => watchlistDtoSchema)),
  },
  { additionalProperties: s.json() },
);
