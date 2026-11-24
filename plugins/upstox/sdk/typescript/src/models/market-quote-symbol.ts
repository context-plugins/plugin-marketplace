import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { depthMapSchema, type DepthMap } from "./depth-map.js";
import { ohlcSchema, type Ohlc } from "./ohlc.js";

export type MarketQuoteSymbol = {
  ohlc?: Ohlc;
  depth?: DepthMap;
  /** Time in milliseconds at which the feeds was updated */
  timestamp?: string;
  /** Key issued by Upstox for the instrument */
  instrumentToken?: string;
  /** Shows the trading symbol of the instrument */
  symbol?: string;
  /** The last traded price of symbol */
  lastPrice?: number;
  /** The volume traded today on symbol */
  volume?: number;
  /** Average price */
  averagePrice?: number;
  /** Total number of outstanding contracts held by market participants exchange-wide (only F&O) */
  oi?: number;
  /** The absolute change from yesterday's close to last traded price */
  netChange?: number;
  /** The total number of bid quantity available for trading */
  totalBuyQuantity?: number;
  /** The total number of ask quantity available for trading */
  totalSellQuantity?: number;
  /** The lower circuit of symbol */
  lowerCircuitLimit?: number;
  /** The upper circuit of symbol */
  upperCircuitLimit?: number;
  /** Time in milliseconds at which last trade happened */
  lastTradeTime?: string;
  oiDayHigh?: number;
  oiDayLow?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const marketQuoteSymbolSchema: Schema<MarketQuoteSymbol> = s.object<MarketQuoteSymbol>(
  {
    ohlc: s.optional(s.lazy(() => ohlcSchema)),
    depth: s.optional(s.lazy(() => depthMapSchema)),
    timestamp: s.optional(s.string()),
    instrumentToken: s.optional(s.string()),
    symbol: s.optional(s.string()),
    lastPrice: s.optional(s.float64()),
    volume: s.optional(s.int()),
    averagePrice: s.optional(s.float64()),
    oi: s.optional(s.float64()),
    netChange: s.optional(s.float64()),
    totalBuyQuantity: s.optional(s.float64()),
    totalSellQuantity: s.optional(s.float64()),
    lowerCircuitLimit: s.optional(s.float64()),
    upperCircuitLimit: s.optional(s.float64()),
    lastTradeTime: s.optional(s.string()),
    oiDayHigh: s.optional(s.float64()),
    oiDayLow: s.optional(s.float64()),
    _keysMap: {
      instrumentToken: "instrument_token",
      lastPrice: "last_price",
      averagePrice: "average_price",
      netChange: "net_change",
      totalBuyQuantity: "total_buy_quantity",
      totalSellQuantity: "total_sell_quantity",
      lowerCircuitLimit: "lower_circuit_limit",
      upperCircuitLimit: "upper_circuit_limit",
      lastTradeTime: "last_trade_time",
      oiDayHigh: "oi_day_high",
      oiDayLow: "oi_day_low",
    },
  },
  { additionalProperties: s.json() },
);
