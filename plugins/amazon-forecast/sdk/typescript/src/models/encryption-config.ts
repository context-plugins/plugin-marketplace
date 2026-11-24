import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EncryptionConfig = {
  /**
   * The ARN of the IAM role that Amazon Forecast can assume to access the KMS key. Passing a role
   * across Amazon Web Services accounts is not allowed. If you pass a role that isn't in your
   * account, you get an InvalidInputException error.
   */
  roleArn: string;
  /** The Amazon Resource Name (ARN) of the KMS key. */
  kmsKeyArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const encryptionConfigSchema: Schema<EncryptionConfig> = s.object<EncryptionConfig>(
  {
    roleArn: s.string(),
    kmsKeyArn: s.string(),
    _keysMap: {
      roleArn: "RoleArn",
      kmsKeyArn: "KMSKeyArn",
    },
  },
  { additionalProperties: s.json() },
);
