import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RuntimeV2LexInternalServerExceptionError = {
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runtimeV2LexInternalServerExceptionErrorSchema: Schema<RuntimeV2LexInternalServerExceptionError> =
  s.object<RuntimeV2LexInternalServerExceptionError>(
    {
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );
