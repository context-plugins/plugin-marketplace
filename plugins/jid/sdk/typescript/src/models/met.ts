import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Met = {
  Unknown: "unknown",
} as const;
export type Met = (typeof Met)[keyof typeof Met] | (string & {});

export const metSchema: EnumSchema<Met> = s.enumOf<Met>(Met);
