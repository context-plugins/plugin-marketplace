import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DataType = {
  Text: "text",
  Number: "number",
  Boolean: "boolean",
  Date: "date",
  Select: "select",
  Multiselect: "multiselect",
  Currency: "currency",
  Reference: "reference",
  Email: "email",
  Url: "url",
} as const;
export type DataType = (typeof DataType)[keyof typeof DataType] | (string & {});

export const dataTypeSchema: EnumSchema<DataType> = s.enumOf<DataType>(DataType);
