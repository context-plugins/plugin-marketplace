import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateQueueResult = {
  /** The URL of the created Amazon SQS queue. */
  queueUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createQueueResultSchema: Schema<CreateQueueResult> = s.object<CreateQueueResult>(
  {
    queueUrl: s.optional(s.string()),
    _keysMap: {
      queueUrl: "QueueUrl",
    },
  },
  { additionalProperties: s.json() },
);
