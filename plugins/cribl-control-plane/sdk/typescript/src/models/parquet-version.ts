import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Determines which data types are supported and how they are represented */
export const ParquetVersion = {
  Parquet10: "PARQUET_1_0",
  Parquet24: "PARQUET_2_4",
  Parquet26: "PARQUET_2_6",
} as const;
export type ParquetVersion = (typeof ParquetVersion)[keyof typeof ParquetVersion] | (string & {});

export const parquetVersionSchema: EnumSchema<ParquetVersion> = s.enumOf<ParquetVersion>(ParquetVersion);
