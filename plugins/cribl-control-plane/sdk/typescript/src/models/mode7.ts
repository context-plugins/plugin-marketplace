import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Select the level of detail for container metrics */
export const Mode7 = {
  Basic: "basic",
  All: "all",
  Custom: "custom",
  Disabled: "disabled",
} as const;
export type Mode7 = (typeof Mode7)[keyof typeof Mode7] | (string & {});

export const mode7Schema: EnumSchema<Mode7> = s.enumOf<Mode7>(Mode7);
