import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PathFilterDataFormat = {
  Ndjson: "ndjson",
  Parquet: "parquet",
} as const;
export type PathFilterDataFormat =
  | (typeof PathFilterDataFormat)[keyof typeof PathFilterDataFormat]
  | (string & {});

export const pathFilterDataFormatSchema: EnumSchema<PathFilterDataFormat> =
  s.enumOf<PathFilterDataFormat>(PathFilterDataFormat);
