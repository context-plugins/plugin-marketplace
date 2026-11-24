import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paginationSchema, type Pagination } from "./pagination.js";
import { valueModelSummarySchema, type ValueModelSummary } from "./value-model-summary.js";

export type ValueModelVersionListResponse = {
  data: ValueModelSummary[];
  pagination: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueModelVersionListResponseSchema: Schema<ValueModelVersionListResponse> =
  s.object<ValueModelVersionListResponse>(
    {
      data: s.array(s.lazy(() => valueModelSummarySchema)),
      pagination: paginationSchema,
    },
    { additionalProperties: s.json() },
  );
