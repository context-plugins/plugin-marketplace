import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ErrorError = {
  /** Human-readable error message; retained for form clients. */
  error: string;
  /** Stable machine-readable error identifier. */
  code: string;
  /** Suggested action to resolve the error. */
  hint: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorErrorSchema: Schema<ErrorError> = s.object<ErrorError>(
  {
    error: s.string(),
    code: s.string(),
    hint: s.string(),
  },
  { additionalProperties: s.json() },
);
