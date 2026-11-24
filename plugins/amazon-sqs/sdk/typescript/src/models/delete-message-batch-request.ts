import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  deleteMessageBatchRequestEntrySchema,
  type DeleteMessageBatchRequestEntry,
} from "./delete-message-batch-request-entry.js";

export type DeleteMessageBatchRequest = {
  /**
   * The URL of the Amazon SQS queue from which messages are deleted. Queue URLs and names are
   * case-sensitive.
   */
  queueUrl: string;
  /** Lists the receipt handles for the messages to be deleted. */
  entries: DeleteMessageBatchRequestEntry[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteMessageBatchRequestSchema: Schema<DeleteMessageBatchRequest> =
  s.object<DeleteMessageBatchRequest>(
    {
      queueUrl: s.string(),
      entries: s.array(s.lazy(() => deleteMessageBatchRequestEntrySchema)),
      _keysMap: {
        queueUrl: "QueueUrl",
        entries: "Entries",
      },
    },
    { additionalProperties: s.json() },
  );
