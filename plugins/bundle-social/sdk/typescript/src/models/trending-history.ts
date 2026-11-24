import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TrendingHistory = {
  /** Date in YYYY-MM-DD format. */
  date: string;
  /** Rank position on a specific date. Can be null if not ranked. */
  rankPositionDaily?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const trendingHistorySchema: Schema<TrendingHistory> = s.object<TrendingHistory>(
  {
    date: s.string(),
    rankPositionDaily: s.optionalNullable(s.string()),
    _keysMap: {
      rankPositionDaily: "rank_position_daily",
    },
  },
  { additionalProperties: s.json() },
);
