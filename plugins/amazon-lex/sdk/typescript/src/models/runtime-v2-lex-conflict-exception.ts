import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RuntimeV2LexConflictException = {
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runtimeV2LexConflictExceptionSchema: Schema<RuntimeV2LexConflictException> =
  s.object<RuntimeV2LexConflictException>(
    {
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );
