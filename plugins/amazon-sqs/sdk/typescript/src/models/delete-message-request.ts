import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteMessageRequest = {
  /**
   * The URL of the Amazon SQS queue from which messages are deleted. Queue URLs and names are
   * case-sensitive.
   */
  queueUrl: string;
  /** The receipt handle associated with the message to delete. */
  receiptHandle: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteMessageRequestSchema: Schema<DeleteMessageRequest> = s.object<DeleteMessageRequest>(
  {
    queueUrl: s.string(),
    receiptHandle: s.string(),
    _keysMap: {
      queueUrl: "QueueUrl",
      receiptHandle: "ReceiptHandle",
    },
  },
  { additionalProperties: s.json() },
);
