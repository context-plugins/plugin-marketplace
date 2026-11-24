import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RuntimeV2LexThrottlingExceptionError = {
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runtimeV2LexThrottlingExceptionErrorSchema: Schema<RuntimeV2LexThrottlingExceptionError> =
  s.object<RuntimeV2LexThrottlingExceptionError>(
    {
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );
