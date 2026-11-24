import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { publicApiSecretDtoSchema, type PublicApiSecretDto } from "./public-api-secret-dto.js";

export type PublicApiListSecretsResponse = {
  content: PublicApiSecretDto[];
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiListSecretsResponseSchema: Schema<PublicApiListSecretsResponse> =
  s.object<PublicApiListSecretsResponse>(
    {
      content: s.array(s.lazy(() => publicApiSecretDtoSchema)),
      first: s.boolean(),
      last: s.boolean(),
      number: s.int(),
      size: s.int(),
      totalElements: s.int(),
      totalPages: s.int(),
    },
    { additionalProperties: s.json() },
  );
