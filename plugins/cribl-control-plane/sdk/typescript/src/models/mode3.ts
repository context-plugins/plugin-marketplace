import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Select the level of detail for CPU metrics */
export const Mode3 = {
  Basic: "basic",
  All: "all",
  Custom: "custom",
  Disabled: "disabled",
} as const;
export type Mode3 = (typeof Mode3)[keyof typeof Mode3] | (string & {});

export const mode3Schema: EnumSchema<Mode3> = s.enumOf<Mode3>(Mode3);
