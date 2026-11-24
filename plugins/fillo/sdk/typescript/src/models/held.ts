import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Held = {
  _1: "1",
  True: "true",
} as const;
export type Held = (typeof Held)[keyof typeof Held] | (string & {});

export const heldSchema: EnumSchema<Held> = s.enumOf<Held>(Held);
