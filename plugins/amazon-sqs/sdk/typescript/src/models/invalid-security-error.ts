import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InvalidSecurityError = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const invalidSecurityErrorSchema: Schema<InvalidSecurityError> = s.object<InvalidSecurityError>(
  {
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
