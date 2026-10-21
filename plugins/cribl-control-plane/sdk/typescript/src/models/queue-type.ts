import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The queue type used (or created) */
export const QueueType = {
  Standard: "standard",
  Fifo: "fifo",
} as const;
export type QueueType = (typeof QueueType)[keyof typeof QueueType] | (string & {});

export const queueTypeSchema: EnumSchema<QueueType> = s.enumOf<QueueType>(QueueType);
