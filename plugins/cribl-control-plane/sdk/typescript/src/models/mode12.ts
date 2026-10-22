import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Select the level of details for disk metrics */
export const Mode12 = {
  Basic: "basic",
  All: "all",
  Custom: "custom",
  Disabled: "disabled",
} as const;
export type Mode12 = (typeof Mode12)[keyof typeof Mode12] | (string & {});

export const mode12Schema: EnumSchema<Mode12> = s.enumOf<Mode12>(Mode12);
