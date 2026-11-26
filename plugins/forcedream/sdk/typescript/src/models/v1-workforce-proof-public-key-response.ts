import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1WorkforceProofPublicKeyResponse = {
  publicKeyPem?: string;
  keyId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1WorkforceProofPublicKeyResponseSchema: Schema<V1WorkforceProofPublicKeyResponse> =
  s.object<V1WorkforceProofPublicKeyResponse>(
    {
      publicKeyPem: s.optional(s.string()),
      keyId: s.optional(s.string()),
      _keysMap: {
        publicKeyPem: "public_key_pem",
        keyId: "key_id",
      },
    },
    { additionalProperties: s.json() },
  );
