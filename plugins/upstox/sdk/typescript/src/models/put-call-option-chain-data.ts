import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { analyticsDataSchema, type AnalyticsData } from "./analytics-data.js";
import { marketDataSchema, type MarketData } from "./market-data.js";

export type PutCallOptionChainData = {
  instrumentKey?: string;
  marketData?: MarketData;
  optionGreeks?: AnalyticsData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const putCallOptionChainDataSchema: Schema<PutCallOptionChainData> = s.object<PutCallOptionChainData>(
  {
    instrumentKey: s.optional(s.string()),
    marketData: s.optional(s.lazy(() => marketDataSchema)),
    optionGreeks: s.optional(s.lazy(() => analyticsDataSchema)),
    _keysMap: {
      instrumentKey: "instrument_key",
      marketData: "market_data",
      optionGreeks: "option_greeks",
    },
  },
  { additionalProperties: s.json() },
);
