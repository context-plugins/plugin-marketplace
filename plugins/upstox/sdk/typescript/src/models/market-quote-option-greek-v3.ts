import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MarketQuoteOptionGreekV3 = {
  lastPrice?: number;
  instrumentToken?: string;
  ltq?: number;
  volume?: number;
  cp?: number;
  iv?: number;
  vega?: number;
  gamma?: number;
  theta?: number;
  delta?: number;
  oi?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const marketQuoteOptionGreekV3Schema: Schema<MarketQuoteOptionGreekV3> =
  s.object<MarketQuoteOptionGreekV3>(
    {
      lastPrice: s.optional(s.float64()),
      instrumentToken: s.optional(s.string()),
      ltq: s.optional(s.int()),
      volume: s.optional(s.int()),
      cp: s.optional(s.float64()),
      iv: s.optional(s.float64()),
      vega: s.optional(s.float64()),
      gamma: s.optional(s.float64()),
      theta: s.optional(s.float64()),
      delta: s.optional(s.float64()),
      oi: s.optional(s.float64()),
      _keysMap: {
        lastPrice: "last_price",
        instrumentToken: "instrument_token",
      },
    },
    { additionalProperties: s.json() },
  );
