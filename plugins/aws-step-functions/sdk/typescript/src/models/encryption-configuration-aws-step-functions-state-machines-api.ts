import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  type1AwsStepFunctionsStateMachinesApiSchema,
  type Type1AwsStepFunctionsStateMachinesApi,
} from "./type1-aws-step-functions-state-machines-api.js";

export type EncryptionConfigurationAwsStepFunctionsStateMachinesApi = {
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
  type: Type1AwsStepFunctionsStateMachinesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const encryptionConfigurationAwsStepFunctionsStateMachinesApiSchema: Schema<EncryptionConfigurationAwsStepFunctionsStateMachinesApi> =
  s.object<EncryptionConfigurationAwsStepFunctionsStateMachinesApi>(
    {
      kmsKeyId: s.optional(s.string()),
      kmsDataKeyReusePeriodSeconds: s.optional(s.int()),
      type: type1AwsStepFunctionsStateMachinesApiSchema,
    },
    { additionalProperties: s.json() },
  );
