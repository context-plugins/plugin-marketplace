import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates whether the metric is optimized for increase or decreasae */
export const Optimize = {
  Increase: "increase",
  Decrease: "decrease",
} as const;
export type Optimize = (typeof Optimize)[keyof typeof Optimize] | (string & {});

export const optimizeSchema: EnumSchema<Optimize> = s.enumOf<Optimize>(Optimize);
