import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { watchlistDtoSchema, type WatchlistDto } from "./watchlist-dto.js";

/** Resolved watchlists response. */
export type WatchlistResolveResult = {
  /** Resolved watchlists. */
  data: WatchlistDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const watchlistResolveResultSchema: Schema<WatchlistResolveResult> = s.object<WatchlistResolveResult>(
  {
    data: s.array(s.lazy(() => watchlistDtoSchema)),
  },
  { additionalProperties: s.json() },
);
