import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  sendMessageBatchRequestEntrySchema,
  type SendMessageBatchRequestEntry,
} from "./send-message-batch-request-entry.js";

export type SendMessageBatchRequest = {
  /**
   * The URL of the Amazon SQS queue to which batched messages are sent. Queue URLs and names are
   * case-sensitive.
   */
  queueUrl: string;
  /** A list of SendMessageBatchRequestEntry items. */
  entries: SendMessageBatchRequestEntry[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sendMessageBatchRequestSchema: Schema<SendMessageBatchRequest> =
  s.object<SendMessageBatchRequest>(
    {
      queueUrl: s.string(),
      entries: s.array(s.lazy(() => sendMessageBatchRequestEntrySchema)),
      _keysMap: {
        queueUrl: "QueueUrl",
        entries: "Entries",
      },
    },
    { additionalProperties: s.json() },
  );
