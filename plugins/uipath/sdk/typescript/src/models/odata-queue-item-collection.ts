import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { queueItemSchema, type QueueItem } from "./queue-item.js";

/** OData collection response containing queue items */
export type ODataQueueItemCollection = {
  value?: QueueItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oDataQueueItemCollectionSchema: Schema<ODataQueueItemCollection> =
  s.object<ODataQueueItemCollection>(
    {
      value: s.optional(s.array(s.lazy(() => queueItemSchema))),
    },
    { additionalProperties: s.json() },
  );
