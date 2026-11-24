import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Optimize3 = {
  Increase: "increase",
  Decrease: "decrease",
} as const;
export type Optimize3 = (typeof Optimize3)[keyof typeof Optimize3] | (string & {});

export const optimize3Schema: EnumSchema<Optimize3> = s.enumOf<Optimize3>(Optimize3);
