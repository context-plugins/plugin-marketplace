import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  regexListConfSerdeTypeRegexSchema,
  type RegexListConfSerdeTypeRegex,
} from "./regex-list-conf-serde-type-regex.js";

export type FunctionConfSchemaRegexExtract = {
  /**
   * Regex literal with named capturing groups, such as (?<foo>bar), or _NAME_ and _VALUE_ capturing
   * groups, such as (?<_NAME_0>[^ =]+)=(?<_VALUE_0>[^,]+)
   */
  regex?: string;
  /** Additional regex patterns to apply for field extraction. */
  regexList?: RegexListConfSerdeTypeRegex[];
  /** Field on which to perform regex field extraction */
  source?: string;
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

export const functionConfSchemaRegexExtractSchema: Schema<FunctionConfSchemaRegexExtract> =
  s.object<FunctionConfSchemaRegexExtract>({
    regex: s.optional(s.string()),
    regexList: s.optional(s.array(s.lazy(() => regexListConfSerdeTypeRegexSchema))),
    source: s.optional(s.string()),
    iterations: s.optional(s.float64()),
    fieldNameExpression: s.optional(s.string()),
    overwrite: s.optional(s.boolean()),
  });
