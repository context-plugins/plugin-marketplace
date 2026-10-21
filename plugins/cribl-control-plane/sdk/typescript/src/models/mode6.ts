import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Select the level of detail for disk metrics */
export const Mode6 = {
  Basic: "basic",
  All: "all",
  Custom: "custom",
  Disabled: "disabled",
} as const;
export type Mode6 = (typeof Mode6)[keyof typeof Mode6] | (string & {});

export const mode6Schema: EnumSchema<Mode6> = s.enumOf<Mode6>(Mode6);
