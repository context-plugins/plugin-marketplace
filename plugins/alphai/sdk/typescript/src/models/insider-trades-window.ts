import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Event-level aggregates over one rolling window. Counts here are grouped EVENTS, not tranches, so
 * they run lower than the transaction counts of `/api/symbols/{ticker}/insider-summary/`.
 */
export type InsiderTradesWindow = {
  buyCount: number;
  sellCount: number;
  /** Decimal string in USD; null when the window has no priced buys. */
  buyValueUsd?: string | null;
  /** Decimal string in USD; null when the window has no priced sells. */
  sellValueUsd?: string | null;
  /** Distinct reporting owners in the window. */
  uniqueInsiders: number;
  /** Share of the window's events executed under a pre-arranged 10b5-1 plan, in percent. */
  pct10B51: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const insiderTradesWindowProperties: s.Shape<InsiderTradesWindow> = {
  buyCount: s.int(),
  sellCount: s.int(),
  buyValueUsd: s.optionalNullable(s.string()),
  sellValueUsd: s.optionalNullable(s.string()),
  uniqueInsiders: s.int(),
  pct10B51: s.int(),
  _keysMap: {
    buyCount: "buy_count",
    sellCount: "sell_count",
    buyValueUsd: "buy_value_usd",
    sellValueUsd: "sell_value_usd",
    uniqueInsiders: "unique_insiders",
    pct10B51: "pct_10b5_1",
  },
};

export const insiderTradesWindowInternalSchema: Schema<InsiderTradesWindow> = s.object<InsiderTradesWindow>(
  insiderTradesWindowProperties,
  { additionalProperties: s.json() },
);

export const insiderTradesWindowSchema: Schema<InsiderTradesWindow> = s.lazySchema(() =>
  s.object<InsiderTradesWindow>(
    {
      ...insiderTradesWindowProperties,
      pct10B51: s.int().check(s.gte(0), s.lte(100)),
    },
    { additionalProperties: s.json() },
  ),
);
