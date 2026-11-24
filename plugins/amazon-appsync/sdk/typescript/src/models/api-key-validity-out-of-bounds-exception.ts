import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiKeyValidityOutOfBoundsException = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiKeyValidityOutOfBoundsExceptionSchema: Schema<ApiKeyValidityOutOfBoundsException> =
  s.object<ApiKeyValidityOutOfBoundsException>(
    {
      message: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
