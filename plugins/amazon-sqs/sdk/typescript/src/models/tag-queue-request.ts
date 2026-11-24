import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TagQueueRequest = {
  /** The URL of the queue. */
  queueUrl: string;
  /** The list of tags to be added to the specified queue. */
  tags: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tagQueueRequestSchema: Schema<TagQueueRequest> = s.object<TagQueueRequest>(
  {
    queueUrl: s.string(),
    tags: s.record(s.string(), s.string()),
    _keysMap: {
      queueUrl: "QueueUrl",
      tags: "Tags",
    },
  },
  { additionalProperties: s.json() },
);
