import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Data output format. */
export const Type14 = {
  Csv: "csv",
  Elff: "elff",
  Clf: "clf",
  Kvp: "kvp",
  Json: "json",
  Delim: "delim",
} as const;
export type Type14 = (typeof Type14)[keyof typeof Type14] | (string & {});

export const type14Schema: EnumSchema<Type14> = s.enumOf<Type14>(Type14);
