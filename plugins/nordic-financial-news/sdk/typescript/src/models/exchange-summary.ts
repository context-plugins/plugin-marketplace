import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  countryNordicFinancialNewsExchangesApiSchema,
  type CountryNordicFinancialNewsExchangesApi,
} from "./country-nordic-financial-news-exchanges-api.js";

export type ExchangeSummary = {
  /** Unique exchange identifier */
  id: string;
  /** Exchange display name */
  name: string;
  /** ISO 10383 Market Identifier Code */
  micCode: string;
  /** Exchange acronym */
  acronym?: string | null;
  /** Country where the exchange is located */
  country?: CountryNordicFinancialNewsExchangesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const exchangeSummarySchema: Schema<ExchangeSummary> = s.object<ExchangeSummary>(
  {
    id: s.string(),
    name: s.string(),
    micCode: s.string(),
    acronym: s.optionalNullable(s.string()),
    country: s.optional(s.lazy(() => countryNordicFinancialNewsExchangesApiSchema)),
    _keysMap: {
      micCode: "mic_code",
    },
  },
  { additionalProperties: s.json() },
);
