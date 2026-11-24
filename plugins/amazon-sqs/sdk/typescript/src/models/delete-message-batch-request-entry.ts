import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteMessageBatchRequestEntry = {
  /**
   * The identifier for this particular receipt handle. This is used to communicate the result. The
   * Ids of a batch request need to be unique within a request. This identifier can have up to 80
   * characters. The following characters are accepted: alphanumeric characters, hyphens(-), and
   * underscores (_).
   */
  id: string;
  /** A receipt handle. */
  receiptHandle: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteMessageBatchRequestEntrySchema: Schema<DeleteMessageBatchRequestEntry> =
  s.object<DeleteMessageBatchRequestEntry>(
    {
      id: s.string(),
      receiptHandle: s.string(),
      _keysMap: {
        id: "Id",
        receiptHandle: "ReceiptHandle",
      },
    },
    { additionalProperties: s.json() },
  );
