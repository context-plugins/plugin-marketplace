import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { batchResultErrorEntrySchema, type BatchResultErrorEntry } from "./batch-result-error-entry.js";
import {
  sendMessageBatchResultEntrySchema,
  type SendMessageBatchResultEntry,
} from "./send-message-batch-result-entry.js";

export type SendMessageBatchResult = {
  /** A list of SendMessageBatchResultEntry items. */
  successful: SendMessageBatchResultEntry[];
  /**
   * A list of BatchResultErrorEntry items with error details about each message that can't be
   * enqueued.
   */
  failed: BatchResultErrorEntry[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sendMessageBatchResultSchema: Schema<SendMessageBatchResult> = s.object<SendMessageBatchResult>(
  {
    successful: s.array(s.lazy(() => sendMessageBatchResultEntrySchema)),
    failed: s.array(s.lazy(() => batchResultErrorEntrySchema)),
    _keysMap: {
      successful: "Successful",
      failed: "Failed",
    },
  },
  { additionalProperties: s.json() },
);
