import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  companySummaryNordicFinancialNewsIndicesApiSchema,
  type CompanySummaryNordicFinancialNewsIndicesApi,
} from "./company-summary-nordic-financial-news-indices-api.js";
import { paginationSchema, type Pagination } from "./pagination.js";

export type ApiV1IndicesCompaniesResponse = {
  companies: CompanySummaryNordicFinancialNewsIndicesApi[];
  pagination?: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1IndicesCompaniesResponseSchema: Schema<ApiV1IndicesCompaniesResponse> =
  s.object<ApiV1IndicesCompaniesResponse>(
    {
      companies: s.array(s.lazy(() => companySummaryNordicFinancialNewsIndicesApiSchema)),
      pagination: s.optional(s.lazy(() => paginationSchema)),
    },
    { additionalProperties: s.json() },
  );
