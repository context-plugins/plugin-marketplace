import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MarketQuoteSymbolLtpV3 = {
  lastPrice?: number;
  instrumentToken?: string;
  ltq?: number;
  volume?: number;
  cp?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const marketQuoteSymbolLtpV3Schema: Schema<MarketQuoteSymbolLtpV3> = s.object<MarketQuoteSymbolLtpV3>(
  {
    lastPrice: s.optional(s.float64()),
    instrumentToken: s.optional(s.string()),
    ltq: s.optional(s.int()),
    volume: s.optional(s.int()),
    cp: s.optional(s.float64()),
    _keysMap: {
      lastPrice: "last_price",
      instrumentToken: "instrument_token",
    },
  },
  { additionalProperties: s.json() },
);
