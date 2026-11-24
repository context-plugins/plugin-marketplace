import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiAccountSecretResponse = {
  /** Current account webhook secret */
  secret: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiAccountSecretResponseSchema: Schema<ApiAccountSecretResponse> =
  s.object<ApiAccountSecretResponse>(
    {
      secret: s.string(),
    },
    { additionalProperties: s.json() },
  );
