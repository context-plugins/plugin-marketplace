import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How to handle events when all receivers are exerting backpressure */
export const BackpressureBehavior81 = {
  Block: "block",
  Drop: "drop",
} as const;
export type BackpressureBehavior81 =
  | (typeof BackpressureBehavior81)[keyof typeof BackpressureBehavior81]
  | (string & {});

export const backpressureBehavior81Schema: EnumSchema<BackpressureBehavior81> =
  s.enumOf<BackpressureBehavior81>(BackpressureBehavior81);
