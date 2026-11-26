import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InsiderTradesMonthBucket = {
  /** Calendar month, `YYYY-MM`. */
  month: string;
  buyCount: number;
  sellCount: number;
  /** Decimal string in USD; `"0"` for a quiet side. */
  buyValueUsd: string;
  sellValueUsd: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insiderTradesMonthBucketSchema: Schema<InsiderTradesMonthBucket> =
  s.object<InsiderTradesMonthBucket>(
    {
      month: s.string(),
      buyCount: s.int(),
      sellCount: s.int(),
      buyValueUsd: s.string(),
      sellValueUsd: s.string(),
      _keysMap: {
        buyCount: "buy_count",
        sellCount: "sell_count",
        buyValueUsd: "buy_value_usd",
        sellValueUsd: "sell_value_usd",
      },
    },
    { additionalProperties: s.json() },
  );
