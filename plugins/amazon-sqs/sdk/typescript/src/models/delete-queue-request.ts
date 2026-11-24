import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteQueueRequest = {
  /** The URL of the Amazon SQS queue to delete. Queue URLs and names are case-sensitive. */
  queueUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteQueueRequestSchema: Schema<DeleteQueueRequest> = s.object<DeleteQueueRequest>(
  {
    queueUrl: s.string(),
    _keysMap: {
      queueUrl: "QueueUrl",
    },
  },
  { additionalProperties: s.json() },
);
