import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type10Schema, type Type10 } from "./type10.js";

export type SerializeTypeKvp = {
  /** Data output format. */
  type?: Type10;
  /** Clean field names by replacing non-[a-zA-Z0-9] characters with _ */
  cleanFields?: boolean;
  /**
   * Required for CSV, ELFF, and CLF. All other formats support wildcard field lists. Examples:
   * host, myField, !source *
   */
  fields?: string[];
  /**
   * Delimiter used to separate key=value pairs. Defaults to a single space character. Should not
   * have common characters with key-value delimiter.
   */
  pairDelimiter?: string;
  /**
   * Delimiter used to separate key and value in pair. Defaults to a '='. Should not have common
   * characters with pair delimiter.
   */
  keyValueDelimiter?: string;
};

export const serializeTypeKvpSchema: Schema<SerializeTypeKvp> = s.object<SerializeTypeKvp>({
  type: s.optional(s.lazy(() => type10Schema)),
  cleanFields: s.optional(s.boolean()),
  fields: s.optional(s.array(s.string())),
  pairDelimiter: s.optional(s.string()),
  keyValueDelimiter: s.optional(s.string()),
});
