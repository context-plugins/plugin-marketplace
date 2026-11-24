import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { watchlistDtoSchema, type WatchlistDto } from "./watchlist-dto.js";

/** Single watchlist response. */
export type WatchlistResult = {
  /** Watchlist of people and companies for use with monitors. */
  data: WatchlistDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const watchlistResultSchema: Schema<WatchlistResult> = s.object<WatchlistResult>(
  {
    data: watchlistDtoSchema,
  },
  { additionalProperties: s.json() },
);
