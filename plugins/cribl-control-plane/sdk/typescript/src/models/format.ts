import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Data format to use when sending data to ClickHouse. Defaults to JSON Compact. */
export const Format = {
  JsonCompactEachRowWithNames: "json-compact-each-row-with-names",
  JsonEachRow: "json-each-row",
} as const;
export type Format = (typeof Format)[keyof typeof Format] | (string & {});

export const formatSchema: EnumSchema<Format> = s.enumOf<Format>(Format);
