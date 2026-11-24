import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { insightResponseSchema, type InsightResponse } from "./insight-response.js";
import { paginationSchema, type Pagination } from "./pagination.js";

/** Paginated list of insight results. */
export type ResultsBody = {
  /** List of insight results. */
  results?: InsightResponse[];
  /** Cursor-based pagination metadata. */
  pagination?: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resultsBodySchema: Schema<ResultsBody> = s.object<ResultsBody>(
  {
    results: s.optional(s.array(s.lazy(() => insightResponseSchema))),
    pagination: s.optional(s.lazy(() => paginationSchema)),
  },
  { additionalProperties: s.json() },
);
