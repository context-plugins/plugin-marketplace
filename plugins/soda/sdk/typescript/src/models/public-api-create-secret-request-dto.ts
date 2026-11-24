import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiCreateSecretRequestDto = {
  encryptedValue: string;
  encryptionKey: string;
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiCreateSecretRequestDtoSchema: Schema<PublicApiCreateSecretRequestDto> =
  s.object<PublicApiCreateSecretRequestDto>(
    {
      encryptedValue: s.string(),
      encryptionKey: s.string(),
      name: s.string(),
    },
    { additionalProperties: s.json() },
  );
