import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type1Schema, type Type1 } from "./type1.js";

export type PutEncryptionConfigRequest = {
  /**
   * An Amazon Web Services KMS key in one of the following formats: Alias - The name of the key.
   * For example, alias/MyKey. Key ID - The KMS key ID of the key. For example,
   * ae4aa6d49-a4d8-9df9-a475-4ff6d7898456. Amazon Web Services X-Ray does not support asymmetric
   * KMS keys. ARN - The full Amazon Resource Name of the key ID or alias. For example,
   * arn:aws:kms:us-east-2:123456789012:key/ae4aa6d49-a4d8-9df9-a475-4ff6d7898456. Use this format
   * to specify a key in a different account. Omit this key if you set Type to NONE.
   */
  keyId?: string;
  /**
   * The type of encryption. Set to KMS to use your own key for encryption. Set to NONE for default
   * encryption.
   */
  type: Type1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const putEncryptionConfigRequestSchema: Schema<PutEncryptionConfigRequest> =
  s.object<PutEncryptionConfigRequest>(
    {
      keyId: s.optional(s.string()),
      type: type1Schema,
      _keysMap: {
        keyId: "KeyId",
        type: "Type",
      },
    },
    { additionalProperties: s.json() },
  );
