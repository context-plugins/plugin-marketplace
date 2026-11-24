import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PathFormat = {
  /**
   * A list of Amazon S3 prefixes that points to sub-folders in the Amazon S3 bucket. Specify this
   * list if you only want Lex to read the files under this set of sub-folders.
   */
  objectPrefixes?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pathFormatSchema: Schema<PathFormat> = s.object<PathFormat>(
  {
    objectPrefixes: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
