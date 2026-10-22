import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { operationModeSchema, type OperationMode } from "./operation-mode.js";
import {
  patternListConfSerdeTypeGrokSchema,
  type PatternListConfSerdeTypeGrok,
} from "./pattern-list-conf-serde-type-grok.js";
import {
  regexListConfSerdeTypeRegexSchema,
  type RegexListConfSerdeTypeRegex,
} from "./regex-list-conf-serde-type-regex.js";
import { type13Schema, type Type13 } from "./type13.js";

export type FunctionConfSchemaSerde = {
  /** Extract creates new fields. Reserialize extracts and filters fields, and then reserializes. */
  mode?: OperationMode;
  /** Parser or formatter type to use. */
  type?: Type13;
  /** List of fields to keep. Supports wildcards (*). Takes precedence over 'Fields to remove'. */
  keep?: string[];
  /**
   * List of fields to remove. Supports wildcards (*). Cannot remove fields that match 'Fields to
   * keep'.
   */
  remove?: string[];
  /**
   * Expression evaluated against {index, name, value} context. Return truthy to keep a field, or
   * falsy to remove it.
   */
  fieldFilterExpr?: string;
  /**
   * A list of characters that may be present in a key name, even though they are normally separator
   * or control characters
   */
  allowedKeyChars?: string[];
  /**
   * A list of characters that may be present in a value, even though they are normally separator or
   * control characters
   */
  allowedValueChars?: string[];
  /** The fields to be extracted, listed in order. Will auto-generate if empty. */
  fields?: string[];
  /**
   * Regex literal with named capturing groups, such as (?<foo>bar), or _NAME_ and _VALUE_ capturing
   * groups, such as(?<_NAME_0>[^ =]+)=(?<_VALUE_0>[^,]+)
   */
  regex?: string;
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
  /** Grok pattern to extract fields. Syntax supported: %{PATTERN_NAME:FIELD_NAME} */
  pattern?: string;
  /** Additional Grok patterns to apply to the source field. */
  patternList?: PatternListConfSerdeTypeGrok[];
};

export const functionConfSchemaSerdeSchema: Schema<FunctionConfSchemaSerde> =
  s.object<FunctionConfSchemaSerde>({
    mode: s.optional(s.lazy(() => operationModeSchema)),
    type: s.optional(s.lazy(() => type13Schema)),
    keep: s.optional(s.array(s.string())),
    remove: s.optional(s.array(s.string())),
    fieldFilterExpr: s.optional(s.string()),
    allowedKeyChars: s.optional(s.array(s.string())),
    allowedValueChars: s.optional(s.array(s.string())),
    fields: s.optional(s.array(s.string())),
    regex: s.optional(s.string()),
    regexList: s.optional(s.array(s.lazy(() => regexListConfSerdeTypeRegexSchema))),
    iterations: s.optional(s.float64()),
    fieldNameExpression: s.optional(s.string()),
    overwrite: s.optional(s.boolean()),
    pattern: s.optional(s.string()),
    patternList: s.optional(s.array(s.lazy(() => patternListConfSerdeTypeGrokSchema))),
  });
