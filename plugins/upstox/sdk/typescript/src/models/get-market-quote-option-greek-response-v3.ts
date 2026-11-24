import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  marketQuoteOptionGreekV3Schema,
  type MarketQuoteOptionGreekV3,
} from "./market-quote-option-greek-v3.js";
import { statusSchema, type Status } from "./status.js";

export type GetMarketQuoteOptionGreekResponseV3 = {
  status?: Status;
  data?: Record<string, MarketQuoteOptionGreekV3>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getMarketQuoteOptionGreekResponseV3Schema: Schema<GetMarketQuoteOptionGreekResponseV3> =
  s.object<GetMarketQuoteOptionGreekResponseV3>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      data: s.optional(
        s.record(
          s.string(),
          s.lazy(() => marketQuoteOptionGreekV3Schema),
        ),
      ),
    },
    { additionalProperties: s.json() },
  );
