import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MarketData = {
  ltp?: number;
  volume?: number;
  oi?: number;
  closePrice?: number;
  bidPrice?: number;
  bidQty?: number;
  askPrice?: number;
  askQty?: number;
  prevOi?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const marketDataSchema: Schema<MarketData> = s.object<MarketData>(
  {
    ltp: s.optional(s.float64()),
    volume: s.optional(s.int()),
    oi: s.optional(s.float64()),
    closePrice: s.optional(s.float64()),
    bidPrice: s.optional(s.float64()),
    bidQty: s.optional(s.int()),
    askPrice: s.optional(s.float64()),
    askQty: s.optional(s.int()),
    prevOi: s.optional(s.float64()),
    _keysMap: {
      closePrice: "close_price",
      bidPrice: "bid_price",
      bidQty: "bid_qty",
      askPrice: "ask_price",
      askQty: "ask_qty",
      prevOi: "prev_oi",
    },
  },
  { additionalProperties: s.json() },
);
