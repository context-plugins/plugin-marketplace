import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { indexingStatusFilterSchema, type IndexingStatusFilter } from "./indexing-status-filter.js";

/** Optional body for record-group (folder/KB container) reindex. */
export type ReindexRecordGroupRequestBody = {
  /** Depth of records under the record group to include. @default 0 */
  depth?: number;
  /** Force reindex for all matched records in the group. @default false */
  force?: boolean;
  /** When set, only records matching these indexing statuses are reindexed. */
  statusFilters?: IndexingStatusFilter[];
};

export const reindexRecordGroupRequestBodySchema: Schema<ReindexRecordGroupRequestBody> =
  s.object<ReindexRecordGroupRequestBody>({
    depth: s.defaulted(s.int(), 0),
    force: s.defaulted(s.boolean(), false),
    statusFilters: s.optional(s.array(s.lazy(() => indexingStatusFilterSchema))),
  });
