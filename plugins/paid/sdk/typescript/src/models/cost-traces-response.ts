import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { costTraceSchema, type CostTrace } from "./cost-trace.js";
import { paginationMetaSchema, type PaginationMeta } from "./pagination-meta.js";

/** Response containing cost traces and pagination metadata */
export type CostTracesResponse = {
  traces: CostTrace[];
  /** Pagination metadata for cost traces */
  meta: PaginationMeta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const costTracesResponseSchema: Schema<CostTracesResponse> = s.object<CostTracesResponse>(
  {
    traces: s.array(s.lazy(() => costTraceSchema)),
    meta: paginationMetaSchema,
  },
  { additionalProperties: s.json() },
);
