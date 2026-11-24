import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BatchImportRetry = {
  batchId?: string | null;
  messageIds?: string[] | null;
};

export const batchImportRetrySchema: Schema<BatchImportRetry> = s.object<BatchImportRetry>({
  batchId: s.optionalNullable(s.string()),
  messageIds: s.optionalNullable(s.array(s.string())),
});
