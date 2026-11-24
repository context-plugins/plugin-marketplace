import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { encryptionConfigurationSchema, type EncryptionConfiguration } from "./encryption-configuration.js";
import { loggingConfigurationSchema, type LoggingConfiguration } from "./logging-configuration.js";
import { tracingConfigurationSchema, type TracingConfiguration } from "./tracing-configuration.js";

export type UpdateStateMachineInput = {
  /** The Amazon Resource Name (ARN) of the state machine. */
  stateMachineArn: string;
  /** The Amazon States Language definition of the state machine. See Amazon States Language. */
  definition?: string;
  /** The Amazon Resource Name (ARN) of the IAM role of the state machine. */
  roleArn?: string;
  loggingConfiguration?: LoggingConfiguration;
  tracingConfiguration?: TracingConfiguration;
  /**
   * Specifies whether the state machine version is published. The default is false. To publish a
   * version after updating the state machine, set publish to true.
   */
  publish?: boolean;
  /**
   * An optional description of the state machine version to publish. You can only specify the
   * versionDescription parameter if you've set publish to true.
   */
  versionDescription?: string;
  encryptionConfiguration?: EncryptionConfiguration;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateStateMachineInputSchema: Schema<UpdateStateMachineInput> =
  s.object<UpdateStateMachineInput>(
    {
      stateMachineArn: s.string(),
      definition: s.optional(s.string()),
      roleArn: s.optional(s.string()),
      loggingConfiguration: s.optional(s.lazy(() => loggingConfigurationSchema)),
      tracingConfiguration: s.optional(s.lazy(() => tracingConfigurationSchema)),
      publish: s.optional(s.boolean()),
      versionDescription: s.optional(s.string()),
      encryptionConfiguration: s.optional(s.lazy(() => encryptionConfigurationSchema)),
    },
    { additionalProperties: s.json() },
  );
