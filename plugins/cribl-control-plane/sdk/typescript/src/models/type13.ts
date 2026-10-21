import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Parser or formatter type to use. */
export const Type13 = {
  Auto: "auto",
  Csv: "csv",
  Elff: "elff",
  Clf: "clf",
  Kvp: "kvp",
  Json: "json",
  Delim: "delim",
  Regex: "regex",
  Grok: "grok",
} as const;
export type Type13 = (typeof Type13)[keyof typeof Type13] | (string & {});

export const type13Schema: EnumSchema<Type13> = s.enumOf<Type13>(Type13);
