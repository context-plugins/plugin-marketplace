import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UntagQueueRequest = {
  /** The URL of the queue. */
  queueUrl: string;
  /** The list of tags to be removed from the specified queue. */
  tagKeys: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const untagQueueRequestSchema: Schema<UntagQueueRequest> = s.object<UntagQueueRequest>(
  {
    queueUrl: s.string(),
    tagKeys: s.array(s.string()),
    _keysMap: {
      queueUrl: "QueueUrl",
      tagKeys: "TagKeys",
    },
  },
  { additionalProperties: s.json() },
);
