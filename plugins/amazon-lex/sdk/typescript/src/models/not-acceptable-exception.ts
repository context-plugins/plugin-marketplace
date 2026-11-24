import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type NotAcceptableException = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notAcceptableExceptionSchema: Schema<NotAcceptableException> = s.object<NotAcceptableException>(
  {
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
