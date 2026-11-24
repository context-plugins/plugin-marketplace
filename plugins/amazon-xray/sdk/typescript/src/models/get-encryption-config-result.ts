import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { encryptionConfigSchema, type EncryptionConfig } from "./encryption-config.js";

export type GetEncryptionConfigResult = {
  encryptionConfig?: EncryptionConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getEncryptionConfigResultSchema: Schema<GetEncryptionConfigResult> =
  s.object<GetEncryptionConfigResult>(
    {
      encryptionConfig: s.optional(s.lazy(() => encryptionConfigSchema)),
      _keysMap: {
        encryptionConfig: "EncryptionConfig",
      },
    },
    { additionalProperties: s.json() },
  );
