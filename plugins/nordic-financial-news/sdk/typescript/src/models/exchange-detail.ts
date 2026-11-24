import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  countryNordicFinancialNewsExchangesApiSchema,
  type CountryNordicFinancialNewsExchangesApi,
} from "./country-nordic-financial-news-exchanges-api.js";
import { indexSchema, type Index } from "./index.js";

export type ExchangeDetail = {
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
  /** Parent operating MIC code (for segment exchanges) */
  operatingMicCode?: string | null;
  /** Primary trading currency (ISO 4217) */
  currency?: string | null;
  /** Ticker suffix used for this exchange */
  tickerSuffix?: string | null;
  /** Exchange timezone */
  timezone?: string | null;
  /** City where the exchange is located */
  city?: string | null;
  /** Stock indices on this exchange */
  indices?: Index[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const exchangeDetailSchema: Schema<ExchangeDetail> = s.object<ExchangeDetail>(
  {
    id: s.string(),
    name: s.string(),
    micCode: s.string(),
    acronym: s.optionalNullable(s.string()),
    country: s.optional(s.lazy(() => countryNordicFinancialNewsExchangesApiSchema)),
    operatingMicCode: s.optionalNullable(s.string()),
    currency: s.optionalNullable(s.string()),
    tickerSuffix: s.optionalNullable(s.string()),
    timezone: s.optionalNullable(s.string()),
    city: s.optionalNullable(s.string()),
    indices: s.optional(s.array(s.lazy(() => indexSchema))),
    _keysMap: {
      micCode: "mic_code",
      operatingMicCode: "operating_mic_code",
      tickerSuffix: "ticker_suffix",
    },
  },
  { additionalProperties: s.json() },
);
