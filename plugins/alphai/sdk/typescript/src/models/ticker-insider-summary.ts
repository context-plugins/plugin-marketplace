import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { topInsiderSchema, type TopInsider } from "./top-insider.js";

export type TickerInsiderSummary = {
  ticker: string;
  days: number;
  totalTransactions: number;
  buyCount: number;
  sellCount: number;
  /** Decimal string in USD; null when the window has no buys. */
  buyValueUsd?: string | null;
  /** Decimal string in USD; null when the window has no sells. */
  sellValueUsd?: string | null;
  /** Share of transactions executed under a pre-arranged 10b5-1 plan, in percent. */
  pct10B51: number;
  topInsiders: TopInsider[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const tickerInsiderSummaryProperties: s.Shape<TickerInsiderSummary> = {
  ticker: s.string(),
  days: s.int(),
  totalTransactions: s.int(),
  buyCount: s.int(),
  sellCount: s.int(),
  buyValueUsd: s.optionalNullable(s.string()),
  sellValueUsd: s.optionalNullable(s.string()),
  pct10B51: s.int(),
  topInsiders: s.array(s.lazy(() => topInsiderSchema)),
  _keysMap: {
    totalTransactions: "total_transactions",
    buyCount: "buy_count",
    sellCount: "sell_count",
    buyValueUsd: "buy_value_usd",
    sellValueUsd: "sell_value_usd",
    pct10B51: "pct_10b5_1",
    topInsiders: "top_insiders",
  },
};

export const tickerInsiderSummaryInternalSchema: Schema<TickerInsiderSummary> =
  s.object<TickerInsiderSummary>(tickerInsiderSummaryProperties, { additionalProperties: s.json() });

export const tickerInsiderSummarySchema: Schema<TickerInsiderSummary> = s.lazySchema(() =>
  s.object<TickerInsiderSummary>(
    {
      ...tickerInsiderSummaryProperties,
      pct10B51: s.int().check(s.gte(0), s.lte(100)),
    },
    { additionalProperties: s.json() },
  ),
);
