import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Select the level of detail for network metrics */
export const Mode5 = {
  Basic: "basic",
  All: "all",
  Custom: "custom",
  Disabled: "disabled",
} as const;
export type Mode5 = (typeof Mode5)[keyof typeof Mode5] | (string & {});

export const mode5Schema: EnumSchema<Mode5> = s.enumOf<Mode5>(Mode5);
