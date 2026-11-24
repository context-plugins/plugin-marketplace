import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MarketQuoteSymbolLtp = {
  /** The last traded price of symbol */
  lastPrice?: number;
  instrumentToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const marketQuoteSymbolLtpSchema: Schema<MarketQuoteSymbolLtp> = s.object<MarketQuoteSymbolLtp>(
  {
    lastPrice: s.optional(s.float64()),
    instrumentToken: s.optional(s.string()),
    _keysMap: {
      lastPrice: "last_price",
      instrumentToken: "instrument_token",
    },
  },
  { additionalProperties: s.json() },
);
