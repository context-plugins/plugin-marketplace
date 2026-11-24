import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { prioritySchema, type Priority } from "./priority.js";

/** Data for creating a new queue item */
export type QueueItemData = {
  /** Name of the target queue definition */
  name: string;
  /** Priority level for queue processing */
  priority?: Priority;
  /** Custom key-value payload data for the item */
  specificContent?: Record<string, unknown>;
  /** Optional unique reference string for this item */
  reference?: string;
  /** Optional deadline by which the item should be processed */
  dueDate?: Date;
  /** Optional earliest time at which the item may be processed */
  postponeDate?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const queueItemDataSchema: Schema<QueueItemData> = s.object<QueueItemData>(
  {
    name: s.string(),
    priority: s.optional(s.lazy(() => prioritySchema)),
    specificContent: s.optional(s.record(s.string(), s.unknown())),
    reference: s.optional(s.string()),
    dueDate: s.optional(s.dateTime()),
    postponeDate: s.optional(s.dateTime()),
    _keysMap: {
      name: "Name",
      priority: "Priority",
      specificContent: "SpecificContent",
      reference: "Reference",
      dueDate: "DueDate",
      postponeDate: "PostponeDate",
    },
  },
  { additionalProperties: s.json() },
);
