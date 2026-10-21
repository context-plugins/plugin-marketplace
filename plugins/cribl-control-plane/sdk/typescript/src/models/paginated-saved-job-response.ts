import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { savedJobResponseSchema, type SavedJobResponse } from "./saved-job-response.js";

export type PaginatedSavedJobResponse = {
  /** The items returned in this response, after any offset/limit pagination has been applied. */
  items: SavedJobResponse[];
  /** Number of items returned in the items array. */
  count: number;
  /** Pagination offset. Returned when offset/limit query parameters are provided. */
  offset?: number;
  /** Pagination limit. Returned when offset/limit query parameters are provided. */
  limit?: number;
  /** Total number of items available. Returned when offset/limit query parameters are provided. */
  totalCount?: number;
};

export const paginatedSavedJobResponseSchema: Schema<PaginatedSavedJobResponse> =
  s.object<PaginatedSavedJobResponse>({
    items: s.array(s.lazy(() => savedJobResponseSchema)),
    count: s.int(),
    offset: s.optional(s.int()),
    limit: s.optional(s.int()),
    totalCount: s.optional(s.int()),
  });
