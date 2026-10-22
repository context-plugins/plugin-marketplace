import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Select the level of detail for memory metrics */
export const Mode4 = {
  Basic: "basic",
  All: "all",
  Custom: "custom",
  Disabled: "disabled",
} as const;
export type Mode4 = (typeof Mode4)[keyof typeof Mode4] | (string & {});

export const mode4Schema: EnumSchema<Mode4> = s.enumOf<Mode4>(Mode4);
