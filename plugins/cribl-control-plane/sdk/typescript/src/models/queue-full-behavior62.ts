import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How to handle events when the queue is exerting backpressure (full capacity or low disk). 'Block'
 * is the same behavior as non-PQ blocking. 'Drop new data' throws away incoming data, while leaving
 * the contents of the PQ unchanged.
 */
export const QueueFullBehavior62 = {
  Block: "block",
  Drop: "drop",
} as const;
export type QueueFullBehavior62 =
  | (typeof QueueFullBehavior62)[keyof typeof QueueFullBehavior62]
  | (string & {});

export const queueFullBehavior62Schema: EnumSchema<QueueFullBehavior62> =
  s.enumOf<QueueFullBehavior62>(QueueFullBehavior62);
