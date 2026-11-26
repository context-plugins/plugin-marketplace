import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { currencyInternalSchema, currencySchema, type Currency } from "./currency.js";

export type CompaniesApiCurrenciesResponse = {
  value?: Currency[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companiesApiCurrenciesResponseProperties: s.Shape<CompaniesApiCurrenciesResponse> = {
  value: s.optional(s.array(s.lazy(() => currencyInternalSchema))),
};

export const companiesApiCurrenciesResponseInternalSchema: Schema<CompaniesApiCurrenciesResponse> =
  s.object<CompaniesApiCurrenciesResponse>(companiesApiCurrenciesResponseProperties, {
    additionalProperties: s.json(),
  });

export const companiesApiCurrenciesResponseSchema: Schema<CompaniesApiCurrenciesResponse> = s.lazySchema(() =>
  s.object<CompaniesApiCurrenciesResponse>(
    {
      ...companiesApiCurrenciesResponseProperties,
      value: s.optional(s.array(s.lazy(() => currencySchema))),
    },
    { additionalProperties: s.json() },
  ),
);
