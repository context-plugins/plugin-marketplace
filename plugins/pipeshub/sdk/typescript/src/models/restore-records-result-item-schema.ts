import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { restoredRecordSchemaSchema, type RestoredRecordSchema } from "./restored-record-schema.js";

/**
 * The outcome for one id of POST /knowledgeBase/records/restore. A restored item carries the fields
 * of RestoreRecordResponseSchema; a refused one carries `reason`, and, when the refusal names other
 * records, `blockedRecordId` plus the snake_case fields below (`external_id`,
 * `conflicting_record_id`, `conflicting_record_name`).
 */
export type RestoreRecordsResultItemSchema = {
  recordId: string;
  success: boolean;
  code?: number;
  /** Why it was not restored, and what to do next */
  reason?: string;
  message?: string;
  /** The delete batch that was restored */
  batchId?: string | null;
  restoredRecords?: RestoredRecordSchema[];
  /** Some restored files could not be queued for indexing */
  reindexPending?: boolean;
  /** Files to reindex by hand to make them searchable again */
  reindexPendingRecordIds?: string[];
  reindexPendingReason?: string;
  /** Items restored under a name another item next to them has; rename them */
  renamePendingRecordIds?: string[];
  renamePendingReason?: string;
  /** The item a refusal is about */
  blockedRecordId?: string;
  /** The source item two of the restored items came from */
  externalId?: string;
  /** The live item that holds this item's place */
  conflictingRecordId?: string;
  conflictingRecordName?: string | null;
  /** Items of the batch that were no longer in the trash */
  missing?: string[];
  /** The folder still in the trash that must be restored first */
  parentId?: string | null;
};

export const restoreRecordsResultItemSchemaSchema: Schema<RestoreRecordsResultItemSchema> =
  s.object<RestoreRecordsResultItemSchema>({
    recordId: s.string(),
    success: s.boolean(),
    code: s.optional(s.int()),
    reason: s.optional(s.string()),
    message: s.optional(s.string()),
    batchId: s.optionalNullable(s.string()),
    restoredRecords: s.optional(s.array(s.lazy(() => restoredRecordSchemaSchema))),
    reindexPending: s.optional(s.boolean()),
    reindexPendingRecordIds: s.optional(s.array(s.string())),
    reindexPendingReason: s.optional(s.string()),
    renamePendingRecordIds: s.optional(s.array(s.string())),
    renamePendingReason: s.optional(s.string()),
    blockedRecordId: s.optional(s.string()),
    externalId: s.optional(s.string()),
    conflictingRecordId: s.optional(s.string()),
    conflictingRecordName: s.optionalNullable(s.string()),
    missing: s.optional(s.array(s.string())),
    parentId: s.optionalNullable(s.string()),
    _keysMap: {
      externalId: "external_id",
      conflictingRecordId: "conflicting_record_id",
      conflictingRecordName: "conflicting_record_name",
    },
  });
