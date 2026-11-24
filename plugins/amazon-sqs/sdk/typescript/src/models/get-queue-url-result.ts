import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetQueueUrlResult = {
  /** The URL of the queue. */
  queueUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getQueueUrlResultSchema: Schema<GetQueueUrlResult> = s.object<GetQueueUrlResult>(
  {
    queueUrl: s.optional(s.string()),
    _keysMap: {
      queueUrl: "QueueUrl",
    },
  },
  { additionalProperties: s.json() },
);
