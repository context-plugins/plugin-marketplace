import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RuntimeV2LexConflictExceptionError = {
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runtimeV2LexConflictExceptionErrorSchema: Schema<RuntimeV2LexConflictExceptionError> =
  s.object<RuntimeV2LexConflictExceptionError>(
    {
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );
