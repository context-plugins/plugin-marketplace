import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InvalidOutputError = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const invalidOutputErrorSchema: Schema<InvalidOutputError> = s.object<InvalidOutputError>(
  {
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
