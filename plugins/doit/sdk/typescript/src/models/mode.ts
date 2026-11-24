import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Controls how the dimension’s `values` are matched when the alert query runs. If mode is omitted,
 * behavior defaults to is.
 */
export const Mode = {
  Is: "is",
  StartsWith: "starts_with",
  EndsWith: "ends_with",
  Contains: "contains",
  Regexp: "regexp",
} as const;
export type Mode = (typeof Mode)[keyof typeof Mode] | (string & {});

export const modeSchema: EnumSchema<Mode> = s.enumOf<Mode>(Mode);
