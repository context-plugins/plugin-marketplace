import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { masterWorkerEntrySchema, type MasterWorkerEntry } from "./master-worker-entry.js";

export type PaginatedMasterWorkerEntry = {
  /** The items returned in this response, after any offset/limit pagination has been applied. */
  items: MasterWorkerEntry[];
  /** Number of items returned in the items array. */
  count: number;
  /** Pagination offset. Returned when offset/limit query parameters are provided. */
  offset?: number;
  /** Pagination limit. Returned when offset/limit query parameters are provided. */
  limit?: number;
  /** Total number of items available. Returned when offset/limit query parameters are provided. */
  totalCount?: number;
};

export const paginatedMasterWorkerEntrySchema: Schema<PaginatedMasterWorkerEntry> =
  s.object<PaginatedMasterWorkerEntry>({
    items: s.array(s.lazy(() => masterWorkerEntrySchema)),
    count: s.int(),
    offset: s.optional(s.int()),
    limit: s.optional(s.int()),
    totalCount: s.optional(s.int()),
  });
