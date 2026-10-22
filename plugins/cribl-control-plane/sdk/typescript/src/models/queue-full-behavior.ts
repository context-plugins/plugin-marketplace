import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether to block or drop events when the queue is exerting backpressure (full capacity or low
 * disk). 'Block' is the same behavior as non-PQ blocking. 'Drop new data' throws away incoming
 * data, while leaving the contents of the PQ unchanged.
 */
export const QueueFullBehavior = {
  Block: "block",
  Drop: "drop",
} as const;
export type QueueFullBehavior = (typeof QueueFullBehavior)[keyof typeof QueueFullBehavior] | (string & {});

export const queueFullBehaviorSchema: EnumSchema<QueueFullBehavior> =
  s.enumOf<QueueFullBehavior>(QueueFullBehavior);
