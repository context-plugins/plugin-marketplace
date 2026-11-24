import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiGetEncryptionKeyResponse = {
  encryptionKey?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiGetEncryptionKeyResponseSchema: Schema<PublicApiGetEncryptionKeyResponse> =
  s.object<PublicApiGetEncryptionKeyResponse>(
    {
      encryptionKey: s.optional(s.record(s.string(), s.unknown())),
    },
    { additionalProperties: s.json() },
  );
