import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { batchImportMetadataSchema, type BatchImportMetadata } from "./batch-import-metadata.js";
import { batchMessageStatusSchema, type BatchMessageStatus } from "./batch-message-status.js";

export type BatchStatus = {
  messages?: BatchMessageStatus[] | null;
  metadata?: BatchImportMetadata;
};

export const batchStatusSchema: Schema<BatchStatus> = s.object<BatchStatus>({
  messages: s.optionalNullable(s.array(s.lazy(() => batchMessageStatusSchema))),
  metadata: s.optional(s.lazy(() => batchImportMetadataSchema)),
});
