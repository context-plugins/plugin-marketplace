import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Format of the output data */
export const DataFormat = {
  Json: "json",
  Raw: "raw",
  Parquet: "parquet",
} as const;
export type DataFormat = (typeof DataFormat)[keyof typeof DataFormat] | (string & {});

export const dataFormatSchema: EnumSchema<DataFormat> = s.enumOf<DataFormat>(DataFormat);
