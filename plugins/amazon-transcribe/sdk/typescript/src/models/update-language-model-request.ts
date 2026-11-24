import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { encryptionConfigurationSchema, type EncryptionConfiguration } from "./encryption-configuration.js";

export type UpdateLanguageModelRequest = {
  /** The name of the custom language model you want to update. Model names are case sensitive. */
  modelName: string;
  /**
   * The Amazon Resource Name (ARN) of an IAM role. If you include EncryptionConfiguration in your
   * request, this role must have permissions to access the specified KMS key. If the role that you
   * specify doesn't have the appropriate permissions, your request fails. IAM role ARNs have the
   * format arn:partition:iam::account:role/role-name-with-path. For example:
   * arn:aws:iam::111122223333:role/Admin. For more information, see IAM ARNs.
   */
  dataAccessRoleArn?: string;
  encryptionConfiguration?: EncryptionConfiguration;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateLanguageModelRequestSchema: Schema<UpdateLanguageModelRequest> =
  s.object<UpdateLanguageModelRequest>(
    {
      modelName: s.string(),
      dataAccessRoleArn: s.optional(s.string()),
      encryptionConfiguration: s.optional(s.lazy(() => encryptionConfigurationSchema)),
      _keysMap: {
        modelName: "ModelName",
        dataAccessRoleArn: "DataAccessRoleArn",
        encryptionConfiguration: "EncryptionConfiguration",
      },
    },
    { additionalProperties: s.json() },
  );
