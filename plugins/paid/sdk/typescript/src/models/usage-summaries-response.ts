import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { usagePaginationMetaSchema, type UsagePaginationMeta } from "./usage-pagination-meta.js";
import { usageSummarySchema, type UsageSummary } from "./usage-summary.js";

/** Response containing usage summaries and pagination metadata */
export type UsageSummariesResponse = {
  data: UsageSummary[];
  /** Pagination metadata for usage summaries */
  pagination: UsagePaginationMeta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usageSummariesResponseSchema: Schema<UsageSummariesResponse> = s.object<UsageSummariesResponse>(
  {
    data: s.array(s.lazy(() => usageSummarySchema)),
    pagination: usagePaginationMetaSchema,
  },
  { additionalProperties: s.json() },
);
