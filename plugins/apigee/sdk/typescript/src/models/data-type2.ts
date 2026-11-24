import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Data type of header */
export const DataType2 = {
  DataTypeUnspecified: "DATA_TYPE_UNSPECIFIED",
  Bool: "BOOL",
  Integer: "INTEGER",
  Float: "FLOAT",
  String: "STRING",
  Uuid: "UUID",
} as const;
export type DataType2 = (typeof DataType2)[keyof typeof DataType2] | (string & {});

export const dataType2Schema: EnumSchema<DataType2> = s.enumOf<DataType2>(DataType2);
