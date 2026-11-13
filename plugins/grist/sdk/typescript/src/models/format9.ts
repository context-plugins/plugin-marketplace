import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The format keyword options for `geojson` are `default` and `topojson`. */
export const Format9 = {
  Default: "default",
  Topojson: "topojson",
} as const;
export type Format9 = (typeof Format9)[keyof typeof Format9] | (string & {});

export const format9Schema: EnumSchema<Format9> = s.enumOf<Format9>(Format9);
