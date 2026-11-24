import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EncryptionConfiguration = {
  /**
   * A map of plain text, non-secret key:value pairs, known as encryption context pairs, that
   * provide an added layer of security for your data. For more information, see KMS encryption
   * context.
   */
  kmsEncryptionContext?: Record<string, string>;
  /**
   * The Amazon Resource Name (ARN) of the KMS key you want to use to encrypt your resource
   * artifacts. Only full KMS key ARN format is supported. KMS key ARNs have the format
   * arn:partition:kms:region:account:key/key-id. For example:
   * arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab. For more
   * information, see KMS key ARNs.
   */
  kmsKey: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const encryptionConfigurationSchema: Schema<EncryptionConfiguration> =
  s.object<EncryptionConfiguration>(
    {
      kmsEncryptionContext: s.optional(s.record(s.string(), s.string())),
      kmsKey: s.string(),
      _keysMap: {
        kmsEncryptionContext: "KMSEncryptionContext",
        kmsKey: "KMSKey",
      },
    },
    { additionalProperties: s.json() },
  );
