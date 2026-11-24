import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { queueItemDataSchema, type QueueItemData } from "./queue-item-data.js";

/** Request payload for adding a new item to a queue */
export type AddQueueItemRequest = {
  /** Data for creating a new queue item */
  itemData: QueueItemData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const addQueueItemRequestSchema: Schema<AddQueueItemRequest> = s.object<AddQueueItemRequest>(
  {
    itemData: queueItemDataSchema,
  },
  { additionalProperties: s.json() },
);
