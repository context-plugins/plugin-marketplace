import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RuntimeV2LexInternalServerException = {
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runtimeV2LexInternalServerExceptionSchema: Schema<RuntimeV2LexInternalServerException> =
  s.object<RuntimeV2LexInternalServerException>(
    {
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );
