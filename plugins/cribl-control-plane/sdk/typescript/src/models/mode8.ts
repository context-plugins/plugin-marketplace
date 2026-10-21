import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Select the level of details for system metrics */
export const Mode8 = {
  Basic: "basic",
  All: "all",
  Custom: "custom",
  Disabled: "disabled",
} as const;
export type Mode8 = (typeof Mode8)[keyof typeof Mode8] | (string & {});

export const mode8Schema: EnumSchema<Mode8> = s.enumOf<Mode8>(Mode8);
