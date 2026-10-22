import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Row format for Search v2 Lake path filters. */
export const PathFilterDataFormat1 = {
  Ndjson: "ndjson",
  Parquet: "parquet",
} as const;
export type PathFilterDataFormat1 =
  | (typeof PathFilterDataFormat1)[keyof typeof PathFilterDataFormat1]
  | (string & {});

export const pathFilterDataFormat1Schema: EnumSchema<PathFilterDataFormat1> =
  s.enumOf<PathFilterDataFormat1>(PathFilterDataFormat1);
