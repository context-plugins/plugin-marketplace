import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { marketQuoteSymbolLtpSchema, type MarketQuoteSymbolLtp } from "./market-quote-symbol-ltp.js";
import { statusSchema, type Status } from "./status.js";

export type GetMarketQuoteLastTradedPriceResponse = {
  status?: Status;
  data?: Record<string, MarketQuoteSymbolLtp>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getMarketQuoteLastTradedPriceResponseSchema: Schema<GetMarketQuoteLastTradedPriceResponse> =
  s.object<GetMarketQuoteLastTradedPriceResponse>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      data: s.optional(
        s.record(
          s.string(),
          s.lazy(() => marketQuoteSymbolLtpSchema),
        ),
      ),
    },
    { additionalProperties: s.json() },
  );
