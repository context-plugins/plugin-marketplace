import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paginationSchema, type Pagination } from "./pagination.js";
import { sourceSummarySchema, type SourceSummary } from "./source-summary.js";

export type ApiV1SourcesResponse = {
  sources?: SourceSummary[];
  pagination?: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1SourcesResponseSchema: Schema<ApiV1SourcesResponse> = s.object<ApiV1SourcesResponse>(
  {
    sources: s.optional(s.array(s.lazy(() => sourceSummarySchema))),
    pagination: s.optional(s.lazy(() => paginationSchema)),
  },
  { additionalProperties: s.json() },
);
