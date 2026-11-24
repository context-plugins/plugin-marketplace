import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ConflictExceptionError = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conflictExceptionErrorSchema: Schema<ConflictExceptionError> = s.object<ConflictExceptionError>(
  {
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
