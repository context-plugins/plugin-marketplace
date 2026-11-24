import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ConcurrentModificationExceptionError = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const concurrentModificationExceptionErrorSchema: Schema<ConcurrentModificationExceptionError> =
  s.object<ConcurrentModificationExceptionError>(
    {
      message: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
