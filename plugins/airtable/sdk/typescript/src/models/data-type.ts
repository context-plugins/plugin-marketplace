import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DataType = {
  TableData: "tableData",
  TableFields: "tableFields",
  TableMetadata: "tableMetadata",
} as const;
export type DataType = (typeof DataType)[keyof typeof DataType] | (string & {});

export const dataTypeSchema: EnumSchema<DataType> = s.enumOf<DataType>(DataType);
