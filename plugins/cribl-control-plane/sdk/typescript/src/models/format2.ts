import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Numeric format to apply after type conversion. */
export const Format2 = {
  None: "none",
  Fix: "fix",
  Floor: "floor",
  Ceil: "ceil",
} as const;
export type Format2 = (typeof Format2)[keyof typeof Format2] | (string & {});

export const format2Schema: EnumSchema<Format2> = s.enumOf<Format2>(Format2);
