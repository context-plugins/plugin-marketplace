import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  regexListConfSerdeTypeRegexSchema,
  type RegexListConfSerdeTypeRegex,
} from "./regex-list-conf-serde-type-regex.js";
import { type8Schema, type Type8 } from "./type8.js";

export type SerdeTypeRegex = {
  /** Parser or formatter type to use. */
  type?: Type8;
  /** Field containing text to be parsed */
  srcField?: string;
  /** Name of the field to add fields to. Extract mode only. */
  dstField?: string;
  /**
   * Regex literal with named capturing groups, such as (?<foo>bar), or _NAME_ and _VALUE_ capturing
   * groups, such as(?<_NAME_0>[^ =]+)=(?<_VALUE_0>[^,]+)
   */
  regex: string;
  /** Additional regex patterns to apply for field extraction. */
  regexList?: RegexListConfSerdeTypeRegex[];
  /**
   * The maximum number of times to apply regex to source field when the global flag is set, or when
   * using _NAME_ and _VALUE_ capturing groups
   */
  iterations?: number;
  /**
   * JavaScript expression to format field names when _NAME_n and _VALUE_n capturing groups are
   * used. Original field name is in global variable 'name'. Example: To append XX to all field
   * names, use `${name}_XX` (backticks are literal). If empty, names will be sanitized using this
   * regex: /^[_0-9]+|[^a-zA-Z0-9_]+/g. You can access other fields values via __e.<fieldName>.
   */
  fieldNameExpression?: string;
  /**
   * Overwrite existing event fields with extracted values. If disabled, existing fields will be
   * converted to an array.
   */
  overwrite?: boolean;
};

export const serdeTypeRegexSchema: Schema<SerdeTypeRegex> = s.object<SerdeTypeRegex>({
  type: s.optional(s.lazy(() => type8Schema)),
  srcField: s.optional(s.string()),
  dstField: s.optional(s.string()),
  regex: s.string(),
  regexList: s.optional(s.array(s.lazy(() => regexListConfSerdeTypeRegexSchema))),
  iterations: s.optional(s.float64()),
  fieldNameExpression: s.optional(s.string()),
  overwrite: s.optional(s.boolean()),
});
