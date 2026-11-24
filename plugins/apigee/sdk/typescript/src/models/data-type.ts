import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional. Data type of path param */
export const DataType = {
  DataTypeUnspecified: "DATA_TYPE_UNSPECIFIED",
  Bool: "BOOL",
  Integer: "INTEGER",
  Float: "FLOAT",
  String: "STRING",
  Uuid: "UUID",
} as const;
export type DataType = (typeof DataType)[keyof typeof DataType] | (string & {});

export const dataTypeSchema: EnumSchema<DataType> = s.enumOf<DataType>(DataType);
