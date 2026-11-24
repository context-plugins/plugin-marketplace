import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CodeErrorLocation = {
  /** The line number in the code. Defaults to 0 if unknown. */
  line?: number;
  /** The column number in the code. Defaults to 0 if unknown. */
  column?: number;
  /** The span/length of the error. Defaults to -1 if unknown. */
  span?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const codeErrorLocationSchema: Schema<CodeErrorLocation> = s.object<CodeErrorLocation>(
  {
    line: s.optional(s.int()),
    column: s.optional(s.int()),
    span: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
