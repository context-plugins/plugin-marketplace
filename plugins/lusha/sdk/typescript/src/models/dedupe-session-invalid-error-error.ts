import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DedupeSessionInvalidErrorError = {
  code: string;
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dedupeSessionInvalidErrorErrorSchema: Schema<DedupeSessionInvalidErrorError> =
  s.object<DedupeSessionInvalidErrorError>(
    {
      code: s.string(),
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );
