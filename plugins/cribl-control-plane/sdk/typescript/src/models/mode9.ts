import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Select the level of details for CPU metrics */
export const Mode9 = {
  Basic: "basic",
  All: "all",
  Custom: "custom",
  Disabled: "disabled",
} as const;
export type Mode9 = (typeof Mode9)[keyof typeof Mode9] | (string & {});

export const mode9Schema: EnumSchema<Mode9> = s.enumOf<Mode9>(Mode9);
