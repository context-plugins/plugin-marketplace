import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ChangeMessageVisibilityBatchRequestEntry = {
  /**
   * An identifier for this particular receipt handle used to communicate the result. The Ids of a
   * batch request need to be unique within a request. This identifier can have up to 80 characters.
   * The following characters are accepted: alphanumeric characters, hyphens(-), and underscores
   * (_).
   */
  id: string;
  /** A receipt handle. */
  receiptHandle: string;
  /** The new value (in seconds) for the message's visibility timeout. */
  visibilityTimeout?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const changeMessageVisibilityBatchRequestEntrySchema: Schema<ChangeMessageVisibilityBatchRequestEntry> =
  s.object<ChangeMessageVisibilityBatchRequestEntry>(
    {
      id: s.string(),
      receiptHandle: s.string(),
      visibilityTimeout: s.optional(s.int()),
      _keysMap: {
        id: "Id",
        receiptHandle: "ReceiptHandle",
        visibilityTimeout: "VisibilityTimeout",
      },
    },
    { additionalProperties: s.json() },
  );
