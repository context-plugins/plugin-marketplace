import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The behavior for the handler. */
export const Behavior = {
  Code: "CODE",
  Direct: "DIRECT",
} as const;
export type Behavior = (typeof Behavior)[keyof typeof Behavior] | (string & {});

export const behaviorSchema: EnumSchema<Behavior> = s.enumOf<Behavior>(Behavior);
