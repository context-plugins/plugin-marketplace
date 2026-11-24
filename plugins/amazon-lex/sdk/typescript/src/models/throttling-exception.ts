import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ThrottlingException = {
  /** The number of seconds after which the user can invoke the API again. */
  retryAfterSeconds?: number;
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const throttlingExceptionSchema: Schema<ThrottlingException> = s.object<ThrottlingException>(
  {
    retryAfterSeconds: s.optional(s.int()),
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
