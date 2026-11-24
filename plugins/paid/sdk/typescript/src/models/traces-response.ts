import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paginationMetaSchema, type PaginationMeta } from "./pagination-meta.js";
import { traceSchema, type Trace } from "./trace.js";

/** Response containing cost traces and pagination metadata */
export type TracesResponse = {
  traces: Trace[];
  /** Pagination metadata for cost traces */
  meta: PaginationMeta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tracesResponseSchema: Schema<TracesResponse> = s.object<TracesResponse>(
  {
    traces: s.array(s.lazy(() => traceSchema)),
    meta: paginationMetaSchema,
  },
  { additionalProperties: s.json() },
);
