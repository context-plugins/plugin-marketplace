import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The format keyword options for `geopoint` are `default`,`array`, and `object`. */
export const Format8 = {
  Default: "default",
  Array: "array",
  Object: "object",
} as const;
export type Format8 = (typeof Format8)[keyof typeof Format8] | (string & {});

export const format8Schema: EnumSchema<Format8> = s.enumOf<Format8>(Format8);
