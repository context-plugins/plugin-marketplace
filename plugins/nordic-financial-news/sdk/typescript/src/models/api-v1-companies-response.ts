import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companySummarySchema, type CompanySummary } from "./company-summary.js";
import { paginationSchema, type Pagination } from "./pagination.js";

export type ApiV1CompaniesResponse = {
  companies: CompanySummary[];
  pagination?: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1CompaniesResponseSchema: Schema<ApiV1CompaniesResponse> = s.object<ApiV1CompaniesResponse>(
  {
    companies: s.array(s.lazy(() => companySummarySchema)),
    pagination: s.optional(s.lazy(() => paginationSchema)),
  },
  { additionalProperties: s.json() },
);
