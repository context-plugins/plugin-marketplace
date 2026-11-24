import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { marketQuoteOhlcSchema, type MarketQuoteOhlc } from "./market-quote-ohlc.js";
import { statusSchema, type Status } from "./status.js";

export type GetMarketQuoteOhlcResponse = {
  status?: Status;
  data?: Record<string, MarketQuoteOhlc>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getMarketQuoteOhlcResponseSchema: Schema<GetMarketQuoteOhlcResponse> =
  s.object<GetMarketQuoteOhlcResponse>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      data: s.optional(
        s.record(
          s.string(),
          s.lazy(() => marketQuoteOhlcSchema),
        ),
      ),
    },
    { additionalProperties: s.json() },
  );
