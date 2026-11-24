import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { articleSummarySchema, type ArticleSummary } from "./article-summary.js";
import {
  companySummaryNordicFinancialNewsIndicesApiSchema,
  type CompanySummaryNordicFinancialNewsIndicesApi,
} from "./company-summary-nordic-financial-news-indices-api.js";
import { countrySummarySchema, type CountrySummary } from "./country-summary.js";
import { exchangeSummarySchema, type ExchangeSummary } from "./exchange-summary.js";
import { indexSummarySchema, type IndexSummary } from "./index-summary.js";
import { storySummarySchema, type StorySummary } from "./story-summary.js";

export type Results = {
  articles?: ArticleSummary[];
  stories?: StorySummary[];
  companies?: CompanySummaryNordicFinancialNewsIndicesApi[];
  countries?: CountrySummary[];
  exchanges?: ExchangeSummary[];
  indices?: IndexSummary[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resultsSchema: Schema<Results> = s.object<Results>(
  {
    articles: s.optional(s.array(s.lazy(() => articleSummarySchema))),
    stories: s.optional(s.array(s.lazy(() => storySummarySchema))),
    companies: s.optional(s.array(s.lazy(() => companySummaryNordicFinancialNewsIndicesApiSchema))),
    countries: s.optional(s.array(s.lazy(() => countrySummarySchema))),
    exchanges: s.optional(s.array(s.lazy(() => exchangeSummarySchema))),
    indices: s.optional(s.array(s.lazy(() => indexSummarySchema))),
  },
  { additionalProperties: s.json() },
);
