import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { codeErrorLocationSchema, type CodeErrorLocation } from "./code-error-location.js";

export type CodeError = {
  /** The type of code error. Examples include, but aren't limited to: LINT_ERROR, PARSER_ERROR. */
  errorType?: string;
  /**
   * A user presentable error. Examples include, but aren't limited to: Parsing error: Unterminated
   * string literal.
   */
  value?: string;
  location?: CodeErrorLocation;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const codeErrorSchema: Schema<CodeError> = s.object<CodeError>(
  {
    errorType: s.optional(s.string()),
    value: s.optional(s.string()),
    location: s.optional(s.lazy(() => codeErrorLocationSchema)),
  },
  { additionalProperties: s.json() },
);
