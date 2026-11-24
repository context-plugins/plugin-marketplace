import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UnsupportedMediaTypeExceptionError = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const unsupportedMediaTypeExceptionErrorSchema: Schema<UnsupportedMediaTypeExceptionError> =
  s.object<UnsupportedMediaTypeExceptionError>(
    {
      message: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
