import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Data compression format */
export const DataCompressionFormat = {
  None: "none",
  Gzip: "gzip",
} as const;
export type DataCompressionFormat =
  | (typeof DataCompressionFormat)[keyof typeof DataCompressionFormat]
  | (string & {});

export const dataCompressionFormatSchema: EnumSchema<DataCompressionFormat> =
  s.enumOf<DataCompressionFormat>(DataCompressionFormat);
