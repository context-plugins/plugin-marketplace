import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type NotAcceptableExceptionError = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notAcceptableExceptionErrorSchema: Schema<NotAcceptableExceptionError> =
  s.object<NotAcceptableExceptionError>(
    {
      message: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
