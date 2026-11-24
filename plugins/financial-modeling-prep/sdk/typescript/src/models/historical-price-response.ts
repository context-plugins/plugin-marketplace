import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { historicalPriceSchema, type HistoricalPrice } from "./historical-price.js";

export type HistoricalPriceResponse = {
  symbol?: string;
  historical?: HistoricalPrice[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const historicalPriceResponseSchema: Schema<HistoricalPriceResponse> =
  s.object<HistoricalPriceResponse>(
    {
      symbol: s.optional(s.string()),
      historical: s.optional(s.array(s.lazy(() => historicalPriceSchema))),
    },
    { additionalProperties: s.json() },
  );
