import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InvalidArnException = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const invalidArnExceptionSchema: Schema<InvalidArnException> = s.object<InvalidArnException>(
  {
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
