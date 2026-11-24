import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EncryptionSetting = {
  /** The KMS key ARN used to encrypt the metadata associated with the bot recommendation. */
  kmsKeyArn?: string;
  /** The password used to encrypt the recommended bot recommendation file. */
  botLocaleExportPassword?: string;
  /** The password used to encrypt the associated transcript file. */
  associatedTranscriptsPassword?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const encryptionSettingSchema: Schema<EncryptionSetting> = s.object<EncryptionSetting>(
  {
    kmsKeyArn: s.optional(s.string()),
    botLocaleExportPassword: s.optional(s.string()),
    associatedTranscriptsPassword: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
