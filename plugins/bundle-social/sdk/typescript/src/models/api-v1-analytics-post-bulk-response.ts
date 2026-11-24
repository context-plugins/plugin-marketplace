import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paginationSchema, type Pagination } from "./pagination.js";
import { resultSchema, type Result } from "./result.js";

export type ApiV1AnalyticsPostBulkResponse = {
  results: Result[];
  pagination: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1AnalyticsPostBulkResponseSchema: Schema<ApiV1AnalyticsPostBulkResponse> =
  s.object<ApiV1AnalyticsPostBulkResponse>(
    {
      results: s.array(s.lazy(() => resultSchema)),
      pagination: paginationSchema,
    },
    { additionalProperties: s.json() },
  );
