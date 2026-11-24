import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { marketQuoteSymbolSchema, type MarketQuoteSymbol } from "./market-quote-symbol.js";
import { statusSchema, type Status } from "./status.js";

export type GetFullMarketQuoteResponse = {
  status?: Status;
  data?: Record<string, MarketQuoteSymbol>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getFullMarketQuoteResponseSchema: Schema<GetFullMarketQuoteResponse> =
  s.object<GetFullMarketQuoteResponse>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      data: s.optional(
        s.record(
          s.string(),
          s.lazy(() => marketQuoteSymbolSchema),
        ),
      ),
    },
    { additionalProperties: s.json() },
  );
