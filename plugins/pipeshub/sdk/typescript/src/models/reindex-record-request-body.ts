import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { indexingStatusFilterSchema, type IndexingStatusFilter } from "./indexing-status-filter.js";

/** Optional body for single-record reindex. */
export type ReindexRecordRequestBody = {
  /**
   * Child traversal depth (`0` = record only; higher values include descendants; `100` is used by
   * clients for folder-like reindex).
   *
   * @default 0
   */
  depth?: number;
  /** Force reindex even when the connector considers the record unchanged. @default false */
  force?: boolean;
  /**
   * When set, only records whose indexing status matches one of these values are reindexed (applies
   * to the record and its descendants per `depth`).
   */
  statusFilters?: IndexingStatusFilter[];
};

export const reindexRecordRequestBodySchema: Schema<ReindexRecordRequestBody> =
  s.object<ReindexRecordRequestBody>({
    depth: s.defaulted(s.int(), 0),
    force: s.defaulted(s.boolean(), false),
    statusFilters: s.optional(s.array(s.lazy(() => indexingStatusFilterSchema))),
  });
