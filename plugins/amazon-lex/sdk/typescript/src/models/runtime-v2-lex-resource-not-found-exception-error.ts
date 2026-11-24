import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RuntimeV2LexResourceNotFoundExceptionError = {
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runtimeV2LexResourceNotFoundExceptionErrorSchema: Schema<RuntimeV2LexResourceNotFoundExceptionError> =
  s.object<RuntimeV2LexResourceNotFoundExceptionError>(
    {
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );
