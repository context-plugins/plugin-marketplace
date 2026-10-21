import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indexing status used to filter which records are included in a scoped reindex (record or
 * record-group). Omit `statusFilters` to reindex all descendants regardless of status.
 */
export const IndexingStatusFilter = {
  NotStarted: "NOT_STARTED",
  Queued: "QUEUED",
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
  Failed: "FAILED",
  FileTypeNotSupported: "FILE_TYPE_NOT_SUPPORTED",
  AutoIndexOff: "AUTO_INDEX_OFF",
  Empty: "EMPTY",
} as const;
export type IndexingStatusFilter =
  | (typeof IndexingStatusFilter)[keyof typeof IndexingStatusFilter]
  | (string & {});

export const indexingStatusFilterSchema: EnumSchema<IndexingStatusFilter> =
  s.enumOf<IndexingStatusFilter>(IndexingStatusFilter);
