import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiUpdateSecretRequestDto = {
  encryptedValue: string;
  encryptionKey: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiUpdateSecretRequestDtoSchema: Schema<PublicApiUpdateSecretRequestDto> =
  s.object<PublicApiUpdateSecretRequestDto>(
    {
      encryptedValue: s.string(),
      encryptionKey: s.string(),
    },
    { additionalProperties: s.json() },
  );
