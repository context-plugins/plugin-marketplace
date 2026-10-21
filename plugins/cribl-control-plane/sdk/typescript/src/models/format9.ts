import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Data format to use when sending data. Defaults to JSON Compact. */
export const Format9 = {
  JsonCompactEachRowWithNames: "json-compact-each-row-with-names",
  JsonEachRow: "json-each-row",
} as const;
export type Format9 = (typeof Format9)[keyof typeof Format9] | (string & {});

export const format9Schema: EnumSchema<Format9> = s.enumOf<Format9>(Format9);
