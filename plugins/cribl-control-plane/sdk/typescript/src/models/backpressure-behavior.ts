import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How to handle events when all receivers are exerting backpressure */
export const BackpressureBehavior = {
  Block: "block",
  Drop: "drop",
  Queue: "queue",
} as const;
export type BackpressureBehavior =
  | (typeof BackpressureBehavior)[keyof typeof BackpressureBehavior]
  | (string & {});

export const backpressureBehaviorSchema: EnumSchema<BackpressureBehavior> =
  s.enumOf<BackpressureBehavior>(BackpressureBehavior);
