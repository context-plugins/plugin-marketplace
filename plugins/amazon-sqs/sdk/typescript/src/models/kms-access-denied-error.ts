import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type KmsAccessDeniedError = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const kmsAccessDeniedErrorSchema: Schema<KmsAccessDeniedError> = s.object<KmsAccessDeniedError>(
  {
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
