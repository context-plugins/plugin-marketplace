import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InsiderTradesWeekBucket = {
  /** Monday of the ISO week. */
  weekStart: string;
  buyCount: number;
  sellCount: number;
  buyValueUsd: string;
  sellValueUsd: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insiderTradesWeekBucketSchema: Schema<InsiderTradesWeekBucket> =
  s.object<InsiderTradesWeekBucket>(
    {
      weekStart: s.dateOnly(),
      buyCount: s.int(),
      sellCount: s.int(),
      buyValueUsd: s.string(),
      sellValueUsd: s.string(),
      _keysMap: {
        weekStart: "week_start",
        buyCount: "buy_count",
        sellCount: "sell_count",
        buyValueUsd: "buy_value_usd",
        sellValueUsd: "sell_value_usd",
      },
    },
    { additionalProperties: s.json() },
  );
