import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Data format to use for files written to the Lake Dataset. */
export const Format6 = {
  Json: "json",
  Parquet: "parquet",
  Raw: "raw",
} as const;
export type Format6 = (typeof Format6)[keyof typeof Format6] | (string & {});

export const format6Schema: EnumSchema<Format6> = s.enumOf<Format6>(Format6);
