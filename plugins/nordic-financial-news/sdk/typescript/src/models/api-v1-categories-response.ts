import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { categorySummarySchema, type CategorySummary } from "./category-summary.js";
import { paginationSchema, type Pagination } from "./pagination.js";

export type ApiV1CategoriesResponse = {
  categories: CategorySummary[];
  pagination?: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1CategoriesResponseSchema: Schema<ApiV1CategoriesResponse> =
  s.object<ApiV1CategoriesResponse>(
    {
      categories: s.array(s.lazy(() => categorySummarySchema)),
      pagination: s.optional(s.lazy(() => paginationSchema)),
    },
    { additionalProperties: s.json() },
  );
