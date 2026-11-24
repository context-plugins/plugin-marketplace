import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ohlcV3Schema, type OhlcV3 } from "./ohlc-v3.js";

export type MarketQuoteOhlcv3 = {
  /** The last traded price of symbol */
  lastPrice?: number;
  instrumentToken?: string;
  prevOhlc?: OhlcV3;
  liveOhlc?: OhlcV3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const marketQuoteOhlcv3Schema: Schema<MarketQuoteOhlcv3> = s.object<MarketQuoteOhlcv3>(
  {
    lastPrice: s.optional(s.float64()),
    instrumentToken: s.optional(s.string()),
    prevOhlc: s.optional(s.lazy(() => ohlcV3Schema)),
    liveOhlc: s.optional(s.lazy(() => ohlcV3Schema)),
    _keysMap: {
      lastPrice: "last_price",
      instrumentToken: "instrument_token",
      prevOhlc: "prev_ohlc",
      liveOhlc: "live_ohlc",
    },
  },
  { additionalProperties: s.json() },
);
