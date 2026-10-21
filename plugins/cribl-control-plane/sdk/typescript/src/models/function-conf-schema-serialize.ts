import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type14Schema, type Type14 } from "./type14.js";

export type FunctionConfSchemaSerialize = {
  /** Data output format. */
  type?: Type14;
  /**
   * Required for CSV, ELFF, CLF, and Delimited values. All other formats support wildcard field
   * lists. Examples: host, array*, !host *
   */
  fields?: string[];
  /** Field containing object to serialize. Leave blank to serialize top-level event fields. */
  srcField?: string;
  /** Field to serialize data to */
  dstField?: string;
  /** Clean field names by replacing non-[a-zA-Z0-9] characters with _ */
  cleanFields?: boolean;
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

export const functionConfSchemaSerializeSchema: Schema<FunctionConfSchemaSerialize> =
  s.object<FunctionConfSchemaSerialize>({
    type: s.optional(s.lazy(() => type14Schema)),
    fields: s.optional(s.array(s.string())),
    srcField: s.optional(s.string()),
    dstField: s.optional(s.string()),
    cleanFields: s.optional(s.boolean()),
    pairDelimiter: s.optional(s.string()),
    keyValueDelimiter: s.optional(s.string()),
  });
