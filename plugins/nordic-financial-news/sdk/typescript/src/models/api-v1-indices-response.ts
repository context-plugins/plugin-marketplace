import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { indexSummarySchema, type IndexSummary } from "./index-summary.js";
import { paginationSchema, type Pagination } from "./pagination.js";

export type ApiV1IndicesResponse = {
  indices?: IndexSummary[];
  pagination?: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1IndicesResponseSchema: Schema<ApiV1IndicesResponse> = s.object<ApiV1IndicesResponse>(
  {
    indices: s.optional(s.array(s.lazy(() => indexSummarySchema))),
    pagination: s.optional(s.lazy(() => paginationSchema)),
  },
  { additionalProperties: s.json() },
);
