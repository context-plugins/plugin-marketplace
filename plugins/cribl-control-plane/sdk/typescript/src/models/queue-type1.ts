import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The queue type used (or created). Defaults to Standard. */
export const QueueType1 = {
  Standard: "standard",
  Fifo: "fifo",
} as const;
export type QueueType1 = (typeof QueueType1)[keyof typeof QueueType1] | (string & {});

export const queueType1Schema: EnumSchema<QueueType1> = s.enumOf<QueueType1>(QueueType1);
