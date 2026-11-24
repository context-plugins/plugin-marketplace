import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SslPublicKeyInfo = {
  keySize?: string;
  keyAlgorithm?: string;
  pemRaw?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sslPublicKeyInfoSchema: Schema<SslPublicKeyInfo> = s.object<SslPublicKeyInfo>(
  {
    keySize: s.optional(s.string()),
    keyAlgorithm: s.optional(s.string()),
    pemRaw: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
