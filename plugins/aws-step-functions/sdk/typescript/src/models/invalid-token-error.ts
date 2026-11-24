import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InvalidTokenError = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const invalidTokenErrorSchema: Schema<InvalidTokenError> = s.object<InvalidTokenError>(
  {
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
