import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Select the level of details for network metrics */
export const Mode11 = {
  Basic: "basic",
  All: "all",
  Custom: "custom",
  Disabled: "disabled",
} as const;
export type Mode11 = (typeof Mode11)[keyof typeof Mode11] | (string & {});

export const mode11Schema: EnumSchema<Mode11> = s.enumOf<Mode11>(Mode11);
