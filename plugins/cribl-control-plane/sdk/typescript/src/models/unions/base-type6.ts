import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { serializeTypeCsvSchema, type SerializeTypeCsv } from "../serialize-type-csv.js";
import { serializeTypeDelimSchema, type SerializeTypeDelim } from "../serialize-type-delim.js";
import { serializeTypeKvpSchema, type SerializeTypeKvp } from "../serialize-type-kvp.js";

export type BaseType6 =
  | (SerializeTypeKvp & { type: "kvp" })
  | (SerializeTypeDelim & { type: "delim" })
  | (SerializeTypeCsv & { type: "csv" });

export const baseType6Schema: Schema<BaseType6> = s.discriminatedUnion<BaseType6>("type", {
  kvp: serializeTypeKvpSchema,
  delim: serializeTypeDelimSchema,
  csv: serializeTypeCsvSchema,
});
