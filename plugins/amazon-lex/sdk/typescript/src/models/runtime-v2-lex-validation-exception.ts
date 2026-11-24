import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RuntimeV2LexValidationException = {
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runtimeV2LexValidationExceptionSchema: Schema<RuntimeV2LexValidationException> =
  s.object<RuntimeV2LexValidationException>(
    {
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );
