import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Depth = {
  Direct: "direct",
  Transitive: "transitive",
} as const;
export type Depth = (typeof Depth)[keyof typeof Depth] | (string & {});

export const depthSchema: EnumSchema<Depth> = s.enumOf<Depth>(Depth);
