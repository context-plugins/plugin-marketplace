import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scopeSchema, type Scope } from "./scope.js";
import { tierSchema, type Tier } from "./tier.js";
import { watchlistCountSchema, type WatchlistCount } from "./unions/watchlist-count.js";
import { watchlistLimitSchema, type WatchlistLimit } from "./unions/watchlist-limit.js";

export type RadarSignalAccess = {
  tier: Tier;
  delaySeconds: number;
  scope: Scope;
  watchlistCount: WatchlistCount;
  watchlistLimit: WatchlistLimit;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const radarSignalAccessSchema: Schema<RadarSignalAccess> = s.object<RadarSignalAccess>(
  {
    tier: tierSchema,
    delaySeconds: s.int(),
    scope: scopeSchema,
    watchlistCount: watchlistCountSchema,
    watchlistLimit: watchlistLimitSchema,
    _keysMap: {
      delaySeconds: "delay_seconds",
      watchlistCount: "watchlist_count",
      watchlistLimit: "watchlist_limit",
    },
  },
  { additionalProperties: s.json() },
);
