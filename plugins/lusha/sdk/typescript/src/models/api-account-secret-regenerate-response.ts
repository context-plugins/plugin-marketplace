import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiAccountSecretRegenerateResponse = {
  /** Newly generated account webhook secret (store securely - only shown once) */
  secret: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiAccountSecretRegenerateResponseSchema: Schema<ApiAccountSecretRegenerateResponse> =
  s.object<ApiAccountSecretRegenerateResponse>(
    {
      secret: s.string(),
    },
    { additionalProperties: s.json() },
  );
