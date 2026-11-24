import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SearchResponse = {
  symbol?: string;
  name?: string;
  currency?: string;
  stockExchange?: string;
  exchangeShortName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchResponseSchema: Schema<SearchResponse> = s.object<SearchResponse>(
  {
    symbol: s.optional(s.string()),
    name: s.optional(s.string()),
    currency: s.optional(s.string()),
    stockExchange: s.optional(s.string()),
    exchangeShortName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
