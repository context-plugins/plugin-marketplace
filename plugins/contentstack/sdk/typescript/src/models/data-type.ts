import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Data type of the attribute. */
export const DataType = {
  String: "string",
  Number: "number",
  Boolean: "boolean",
  Date: "date",
} as const;
export type DataType = (typeof DataType)[keyof typeof DataType] | (string & {});

export const dataTypeSchema: EnumSchema<DataType> = s.enumOf<DataType>(DataType);
