import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RuntimeV2LexThrottlingException = {
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runtimeV2LexThrottlingExceptionSchema: Schema<RuntimeV2LexThrottlingException> =
  s.object<RuntimeV2LexThrottlingException>(
    {
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );
