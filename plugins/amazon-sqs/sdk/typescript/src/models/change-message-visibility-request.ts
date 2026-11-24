import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ChangeMessageVisibilityRequest = {
  /**
   * The URL of the Amazon SQS queue whose message's visibility is changed. Queue URLs and names are
   * case-sensitive.
   */
  queueUrl: string;
  /**
   * The receipt handle associated with the message, whose visibility timeout is changed. This
   * parameter is returned by the ReceiveMessage action.
   */
  receiptHandle: string;
  /**
   * The new value for the message's visibility timeout (in seconds). Values range: 0 to 43200.
   * Maximum: 12 hours.
   */
  visibilityTimeout: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const changeMessageVisibilityRequestSchema: Schema<ChangeMessageVisibilityRequest> =
  s.object<ChangeMessageVisibilityRequest>(
    {
      queueUrl: s.string(),
      receiptHandle: s.string(),
      visibilityTimeout: s.int(),
      _keysMap: {
        queueUrl: "QueueUrl",
        receiptHandle: "ReceiptHandle",
        visibilityTimeout: "VisibilityTimeout",
      },
    },
    { additionalProperties: s.json() },
  );
