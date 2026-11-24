import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RuntimeV2LexValidationExceptionError = {
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runtimeV2LexValidationExceptionErrorSchema: Schema<RuntimeV2LexValidationExceptionError> =
  s.object<RuntimeV2LexValidationExceptionError>(
    {
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );
