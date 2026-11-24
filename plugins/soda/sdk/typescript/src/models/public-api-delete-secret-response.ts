import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiDeleteSecretResponse = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiDeleteSecretResponseSchema: Schema<PublicApiDeleteSecretResponse> =
  s.object<PublicApiDeleteSecretResponse>(
    {
      message: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
