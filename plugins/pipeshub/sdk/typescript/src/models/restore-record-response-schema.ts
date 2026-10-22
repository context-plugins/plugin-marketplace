import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { restoredRecordSchemaSchema, type RestoredRecordSchema } from "./restored-record-schema.js";

/** Response returned by POST /knowledgeBase/record/{recordId}/restore. */
export type RestoreRecordResponseSchema = {
  /** @default "True" */
  success?: "True";
  message: string;
  /** The delete batch that was restored */
  batchId?: string | null;
  restoredRecords: RestoredRecordSchema[];
  /** Some restored files could not be queued for indexing */
  reindexPending?: boolean;
  /** Files to reindex by hand to make them searchable again */
  reindexPendingRecordIds?: string[];
  reindexPendingReason?: string;
  /** Items restored under a name another item next to them has; rename them */
  renamePendingRecordIds?: string[];
  renamePendingReason?: string;
};

export const restoreRecordResponseSchemaSchema: Schema<RestoreRecordResponseSchema> =
  s.object<RestoreRecordResponseSchema>({
    success: s.defaulted(s.literal("True"), "True"),
    message: s.string(),
    batchId: s.optionalNullable(s.string()),
    restoredRecords: s.array(s.lazy(() => restoredRecordSchemaSchema)),
    reindexPending: s.optional(s.boolean()),
    reindexPendingRecordIds: s.optional(s.array(s.string())),
    reindexPendingReason: s.optional(s.string()),
    renamePendingRecordIds: s.optional(s.array(s.string())),
    renamePendingReason: s.optional(s.string()),
  });
