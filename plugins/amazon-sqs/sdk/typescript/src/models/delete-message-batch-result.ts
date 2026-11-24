import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { batchResultErrorEntrySchema, type BatchResultErrorEntry } from "./batch-result-error-entry.js";
import {
  deleteMessageBatchResultEntrySchema,
  type DeleteMessageBatchResultEntry,
} from "./delete-message-batch-result-entry.js";

export type DeleteMessageBatchResult = {
  /** A list of DeleteMessageBatchResultEntry items. */
  successful: DeleteMessageBatchResultEntry[];
  /** A list of BatchResultErrorEntry items. */
  failed: BatchResultErrorEntry[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteMessageBatchResultSchema: Schema<DeleteMessageBatchResult> =
  s.object<DeleteMessageBatchResult>(
    {
      successful: s.array(s.lazy(() => deleteMessageBatchResultEntrySchema)),
      failed: s.array(s.lazy(() => batchResultErrorEntrySchema)),
      _keysMap: {
        successful: "Successful",
        failed: "Failed",
      },
    },
    { additionalProperties: s.json() },
  );
