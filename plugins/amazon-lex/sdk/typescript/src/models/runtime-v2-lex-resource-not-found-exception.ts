import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RuntimeV2LexResourceNotFoundException = {
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runtimeV2LexResourceNotFoundExceptionSchema: Schema<RuntimeV2LexResourceNotFoundException> =
  s.object<RuntimeV2LexResourceNotFoundException>(
    {
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );
