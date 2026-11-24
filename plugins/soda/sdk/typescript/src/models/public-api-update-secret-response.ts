import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { publicApiSecretDtoSchema, type PublicApiSecretDto } from "./public-api-secret-dto.js";

export type PublicApiUpdateSecretResponse = {
  secret?: PublicApiSecretDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiUpdateSecretResponseSchema: Schema<PublicApiUpdateSecretResponse> =
  s.object<PublicApiUpdateSecretResponse>(
    {
      secret: s.optional(s.lazy(() => publicApiSecretDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
