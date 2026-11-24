import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { marketQuoteSymbolLtpV3Schema, type MarketQuoteSymbolLtpV3 } from "./market-quote-symbol-ltp-v3.js";
import { statusSchema, type Status } from "./status.js";

export type GetMarketQuoteLastTradedPriceResponseV3 = {
  status?: Status;
  data?: Record<string, MarketQuoteSymbolLtpV3>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getMarketQuoteLastTradedPriceResponseV3Schema: Schema<GetMarketQuoteLastTradedPriceResponseV3> =
  s.object<GetMarketQuoteLastTradedPriceResponseV3>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      data: s.optional(
        s.record(
          s.string(),
          s.lazy(() => marketQuoteSymbolLtpV3Schema),
        ),
      ),
    },
    { additionalProperties: s.json() },
  );
