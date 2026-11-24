import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SimplifiedErrorError = {
  message?: string;
  description?: string;
  resource?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const simplifiedErrorErrorSchema: Schema<SimplifiedErrorError> = s.object<SimplifiedErrorError>(
  {
    message: s.optional(s.string()),
    description: s.optional(s.string()),
    resource: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
