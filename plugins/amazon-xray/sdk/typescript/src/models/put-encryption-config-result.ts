import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { encryptionConfigSchema, type EncryptionConfig } from "./encryption-config.js";

export type PutEncryptionConfigResult = {
  encryptionConfig?: EncryptionConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const putEncryptionConfigResultSchema: Schema<PutEncryptionConfigResult> =
  s.object<PutEncryptionConfigResult>(
    {
      encryptionConfig: s.optional(s.lazy(() => encryptionConfigSchema)),
      _keysMap: {
        encryptionConfig: "EncryptionConfig",
      },
    },
    { additionalProperties: s.json() },
  );
