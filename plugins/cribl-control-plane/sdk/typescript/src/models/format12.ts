import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Numeric format to apply after type conversion. */
export const Format12 = {
  Fix: "fix",
} as const;
export type Format12 = (typeof Format12)[keyof typeof Format12] | (string & {});

export const format12Schema: EnumSchema<Format12> = s.enumOf<Format12>(Format12);
