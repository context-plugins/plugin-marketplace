import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { articlesSchema, type Articles } from "./articles.js";
import { companiesSchema, type Companies } from "./companies.js";
import { countriesSchema, type Countries } from "./countries.js";
import { exchangesSchema, type Exchanges } from "./exchanges.js";
import { indicesSchema, type Indices } from "./indices.js";
import { storiesSchema, type Stories } from "./stories.js";

export type PaginationNordicFinancialNewsSearchApi = {
  articles?: Articles;
  stories?: Stories;
  companies?: Companies;
  countries?: Countries;
  exchanges?: Exchanges;
  indices?: Indices;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginationNordicFinancialNewsSearchApiSchema: Schema<PaginationNordicFinancialNewsSearchApi> =
  s.object<PaginationNordicFinancialNewsSearchApi>(
    {
      articles: s.optional(s.lazy(() => articlesSchema)),
      stories: s.optional(s.lazy(() => storiesSchema)),
      companies: s.optional(s.lazy(() => companiesSchema)),
      countries: s.optional(s.lazy(() => countriesSchema)),
      exchanges: s.optional(s.lazy(() => exchangesSchema)),
      indices: s.optional(s.lazy(() => indicesSchema)),
    },
    { additionalProperties: s.json() },
  );
