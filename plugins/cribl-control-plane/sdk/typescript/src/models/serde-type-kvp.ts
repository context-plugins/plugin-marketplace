import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type4Schema, type Type4 } from "./type4.js";

export type SerdeTypeKvp = {
  /** Parser or formatter type to use. */
  type?: Type4;
  /** Field containing text to be parsed */
  srcField?: string;
  /** Name of the field to add fields to. Extract mode only. */
  dstField?: string;
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
  /** Clean field names by replacing non [a-zA-Z0-9] characters with _ */
  cleanFields?: boolean;
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
};

export const serdeTypeKvpSchema: Schema<SerdeTypeKvp> = s.object<SerdeTypeKvp>({
  type: s.optional(s.lazy(() => type4Schema)),
  srcField: s.optional(s.string()),
  dstField: s.optional(s.string()),
  keep: s.optional(s.array(s.string())),
  remove: s.optional(s.array(s.string())),
  fieldFilterExpr: s.optional(s.string()),
  cleanFields: s.optional(s.boolean()),
  allowedKeyChars: s.optional(s.array(s.string())),
  allowedValueChars: s.optional(s.array(s.string())),
});
