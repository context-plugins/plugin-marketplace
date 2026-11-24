import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

export type EncryptionConfiguration = {
  /**
   * An alias, alias ARN, key ID, or key ARN of a symmetric encryption KMS key to encrypt data. To
   * specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias
   * ARN.
   */
  kmsKeyId?: string;
  /**
   * Maximum duration that Step Functions will reuse data keys. When the period expires, Step
   * Functions will call GenerateDataKey. Only applies to customer managed keys.
   */
  kmsDataKeyReusePeriodSeconds?: number;
  /** Encryption type */
  type: Type;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const encryptionConfigurationSchema: Schema<EncryptionConfiguration> =
  s.object<EncryptionConfiguration>(
    {
      kmsKeyId: s.optional(s.string()),
      kmsDataKeyReusePeriodSeconds: s.optional(s.int()),
      type: typeSchema,
    },
    { additionalProperties: s.json() },
  );
