import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Select the level of detail for system metrics */
export const Mode2 = {
  Basic: "basic",
  All: "all",
  Custom: "custom",
  Disabled: "disabled",
} as const;
export type Mode2 = (typeof Mode2)[keyof typeof Mode2] | (string & {});

export const mode2Schema: EnumSchema<Mode2> = s.enumOf<Mode2>(Mode2);
