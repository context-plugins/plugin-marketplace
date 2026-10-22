import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { serdeTypeAutoSchema, type SerdeTypeAuto } from "../serde-type-auto.js";
import { serdeTypeCsvSchema, type SerdeTypeCsv } from "../serde-type-csv.js";
import { serdeTypeDelimSchema, type SerdeTypeDelim } from "../serde-type-delim.js";
import { serdeTypeGrokSchema, type SerdeTypeGrok } from "../serde-type-grok.js";
import { serdeTypeJsonSchema, type SerdeTypeJson } from "../serde-type-json.js";
import { serdeTypeKvpSchema, type SerdeTypeKvp } from "../serde-type-kvp.js";
import { serdeTypeRegexSchema, type SerdeTypeRegex } from "../serde-type-regex.js";

export type BaseType5 =
  | (SerdeTypeAuto & { type: "auto" })
  | (SerdeTypeKvp & { type: "kvp" })
  | (SerdeTypeDelim & { type: "delim" })
  | (SerdeTypeCsv & { type: "csv" })
  | (SerdeTypeJson & { type: "json" })
  | (SerdeTypeRegex & { type: "regex" })
  | (SerdeTypeGrok & { type: "grok" });

export const baseType5Schema: Schema<BaseType5> = s.discriminatedUnion<BaseType5>("type", {
  auto: serdeTypeAutoSchema,
  kvp: serdeTypeKvpSchema,
  delim: serdeTypeDelimSchema,
  csv: serdeTypeCsvSchema,
  json: serdeTypeJsonSchema,
  regex: serdeTypeRegexSchema,
  grok: serdeTypeGrokSchema,
});
