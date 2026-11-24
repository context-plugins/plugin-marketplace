import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ErrorError = {
  error: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorErrorSchema: Schema<ErrorError> = s.object<ErrorError>(
  {
    error: s.string(),
  },
  { additionalProperties: s.json() },
);
