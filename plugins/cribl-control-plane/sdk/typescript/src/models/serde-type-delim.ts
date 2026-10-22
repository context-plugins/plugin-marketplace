import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type5Schema, type Type5 } from "./type5.js";

export type SerdeTypeDelim = {
  /** Parser or formatter type to use. */
  type?: Type5;
  /** Field containing text to be parsed */
  srcField?: string;
  /** Name of the field to add fields to. Extract mode only. */
  dstField?: string;
  /** The fields to be extracted, listed in order. Will auto-generate if empty. */
  fields?: string[];
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
  /** Delimiter character to use to split values */
  delimChar?: string;
  /** Character used to quote literal values */
  quoteChar?: string;
  /** Escape character used to escape delimiter or quote character */
  escapeChar?: string;
  /** Field value representing the null value. Null fields will be omitted. */
  nullValue?: string;
};

export const serdeTypeDelimSchema: Schema<SerdeTypeDelim> = s.object<SerdeTypeDelim>({
  type: s.optional(s.lazy(() => type5Schema)),
  srcField: s.optional(s.string()),
  dstField: s.optional(s.string()),
  fields: s.optional(s.array(s.string())),
  keep: s.optional(s.array(s.string())),
  remove: s.optional(s.array(s.string())),
  fieldFilterExpr: s.optional(s.string()),
  delimChar: s.optional(s.string()),
  quoteChar: s.optional(s.string()),
  escapeChar: s.optional(s.string()),
  nullValue: s.optional(s.string()),
});
