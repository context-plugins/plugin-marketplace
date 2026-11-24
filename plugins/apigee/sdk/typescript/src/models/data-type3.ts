import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. The type of the data of the attribute. */
export const DataType3 = {
  DataTypeUnspecified: "DATA_TYPE_UNSPECIFIED",
  Enum: "ENUM",
  Json: "JSON",
  String: "STRING",
  Uri: "URI",
} as const;
export type DataType3 = (typeof DataType3)[keyof typeof DataType3] | (string & {});

export const dataType3Schema: EnumSchema<DataType3> = s.enumOf<DataType3>(DataType3);
