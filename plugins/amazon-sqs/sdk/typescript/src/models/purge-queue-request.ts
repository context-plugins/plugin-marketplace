import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PurgeQueueRequest = {
  /**
   * The URL of the queue from which the PurgeQueue action deletes messages. Queue URLs and names
   * are case-sensitive.
   */
  queueUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const purgeQueueRequestSchema: Schema<PurgeQueueRequest> = s.object<PurgeQueueRequest>(
  {
    queueUrl: s.string(),
    _keysMap: {
      queueUrl: "QueueUrl",
    },
  },
  { additionalProperties: s.json() },
);
