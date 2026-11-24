import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  changeMessageVisibilityBatchRequestEntrySchema,
  type ChangeMessageVisibilityBatchRequestEntry,
} from "./change-message-visibility-batch-request-entry.js";

export type ChangeMessageVisibilityBatchRequest = {
  /**
   * The URL of the Amazon SQS queue whose messages' visibility is changed. Queue URLs and names are
   * case-sensitive.
   */
  queueUrl: string;
  /** Lists the receipt handles of the messages for which the visibility timeout must be changed. */
  entries: ChangeMessageVisibilityBatchRequestEntry[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const changeMessageVisibilityBatchRequestSchema: Schema<ChangeMessageVisibilityBatchRequest> =
  s.object<ChangeMessageVisibilityBatchRequest>(
    {
      queueUrl: s.string(),
      entries: s.array(s.lazy(() => changeMessageVisibilityBatchRequestEntrySchema)),
      _keysMap: {
        queueUrl: "QueueUrl",
        entries: "Entries",
      },
    },
    { additionalProperties: s.json() },
  );
