import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListQueueTagsRequest = {
  /** The URL of the queue. */
  queueUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listQueueTagsRequestSchema: Schema<ListQueueTagsRequest> = s.object<ListQueueTagsRequest>(
  {
    queueUrl: s.string(),
    _keysMap: {
      queueUrl: "QueueUrl",
    },
  },
  { additionalProperties: s.json() },
);
