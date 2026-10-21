import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pipelineSchema, type Pipeline } from "./pipeline.js";

export type PaginatedPipeline = {
  /** The items returned in this response, after any offset/limit pagination has been applied. */
  items: Pipeline[];
  /** Number of items returned in the items array. */
  count: number;
  /** Pagination offset. Returned when offset/limit query parameters are provided. */
  offset?: number;
  /** Pagination limit. Returned when offset/limit query parameters are provided. */
  limit?: number;
  /** Total number of items available. Returned when offset/limit query parameters are provided. */
  totalCount?: number;
};

export const paginatedPipelineSchema: Schema<PaginatedPipeline> = s.object<PaginatedPipeline>({
  items: s.array(s.lazy(() => pipelineSchema)),
  count: s.int(),
  offset: s.optional(s.int()),
  limit: s.optional(s.int()),
  totalCount: s.optional(s.int()),
});
