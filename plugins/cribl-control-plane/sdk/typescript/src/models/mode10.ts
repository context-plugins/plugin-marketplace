import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Select the level of details for memory metrics */
export const Mode10 = {
  Basic: "basic",
  All: "all",
  Custom: "custom",
  Disabled: "disabled",
} as const;
export type Mode10 = (typeof Mode10)[keyof typeof Mode10] | (string & {});

export const mode10Schema: EnumSchema<Mode10> = s.enumOf<Mode10>(Mode10);
