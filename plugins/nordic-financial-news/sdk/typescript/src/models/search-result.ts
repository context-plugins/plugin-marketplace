import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  paginationNordicFinancialNewsSearchApiSchema,
  type PaginationNordicFinancialNewsSearchApi,
} from "./pagination-nordic-financial-news-search-api.js";
import { resultsSchema, type Results } from "./results.js";

export type SearchResult = {
  results: Results;
  pagination: PaginationNordicFinancialNewsSearchApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchResultSchema: Schema<SearchResult> = s.object<SearchResult>(
  {
    results: resultsSchema,
    pagination: paginationNordicFinancialNewsSearchApiSchema,
  },
  { additionalProperties: s.json() },
);
