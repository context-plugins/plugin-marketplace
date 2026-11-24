import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { marketQuoteOhlcv3Schema, type MarketQuoteOhlcv3 } from "./market-quote-ohlcv3.js";
import { statusSchema, type Status } from "./status.js";

export type GetMarketQuoteOhlcResponseV3 = {
  status?: Status;
  data?: Record<string, MarketQuoteOhlcv3>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getMarketQuoteOhlcResponseV3Schema: Schema<GetMarketQuoteOhlcResponseV3> =
  s.object<GetMarketQuoteOhlcResponseV3>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      data: s.optional(
        s.record(
          s.string(),
          s.lazy(() => marketQuoteOhlcv3Schema),
        ),
      ),
    },
    { additionalProperties: s.json() },
  );
