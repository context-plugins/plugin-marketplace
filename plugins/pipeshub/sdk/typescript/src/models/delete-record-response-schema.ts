import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response returned by DELETE /knowledgeBase/record/{recordId}. */
export type DeleteRecordResponseSchema = {
  /** @default "True" */
  success?: "True";
  message: string;
  recordId: string;
  connector?: string | null;
  timestamp?: number | null;
  /** True when the record went to the trash instead of being removed */
  softDeleted?: boolean;
  /** The delete batch; restoring any record in it restores all of it */
  batchId?: string | null;
  /** The record is deleted, but removing its embeddings is still owed */
  vectorCleanupPending?: boolean;
  vectorCleanupFailedRecordIds?: string[];
  vectorCleanupFailedVirtualRecordIds?: string[];
};

export const deleteRecordResponseSchemaSchema: Schema<DeleteRecordResponseSchema> =
  s.object<DeleteRecordResponseSchema>({
    success: s.defaulted(s.literal("True"), "True"),
    message: s.string(),
    recordId: s.string(),
    connector: s.optionalNullable(s.string()),
    timestamp: s.optionalNullable(s.int()),
    softDeleted: s.optional(s.boolean()),
    batchId: s.optionalNullable(s.string()),
    vectorCleanupPending: s.optional(s.boolean()),
    vectorCleanupFailedRecordIds: s.optional(s.array(s.string())),
    vectorCleanupFailedVirtualRecordIds: s.optional(s.array(s.string())),
  });
