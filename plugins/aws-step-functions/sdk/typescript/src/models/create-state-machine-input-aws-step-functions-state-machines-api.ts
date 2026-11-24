import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  encryptionConfigurationAwsStepFunctionsStateMachinesApiSchema,
  type EncryptionConfigurationAwsStepFunctionsStateMachinesApi,
} from "./encryption-configuration-aws-step-functions-state-machines-api.js";
import { loggingConfigurationSchema, type LoggingConfiguration } from "./logging-configuration.js";
import { tagSchema, type Tag } from "./tag.js";
import { tracingConfigurationSchema, type TracingConfiguration } from "./tracing-configuration.js";
import {
  typeAwsStepFunctionsStateMachinesApiSchema,
  type TypeAwsStepFunctionsStateMachinesApi,
} from "./type-aws-step-functions-state-machines-api.js";

export type CreateStateMachineInputAwsStepFunctionsStateMachinesApi = {
  /**
   * The name of the state machine. A name must not contain: white space brackets { } [ ] wildcard
   * characters ? * special characters " # % \ ^ | ~ ` $ & , ; : / control characters (U+0000-001F,
   * U+007F-009F, U+FFFE-FFFF) surrogates (U+D800-DFFF) invalid characters ( U+10FFFF) To enable
   * logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.
   */
  name: string;
  /** The Amazon States Language definition of the state machine. See Amazon States Language. */
  definition: string;
  /** The Amazon Resource Name (ARN) of the IAM role to use for this state machine. */
  roleArn: string;
  /**
   * Determines whether a Standard or Express state machine is created. The default is STANDARD. You
   * cannot update the type of a state machine once it has been created.
   */
  type?: TypeAwsStepFunctionsStateMachinesApi;
  loggingConfiguration?: LoggingConfiguration;
  /**
   * Tags to be added when creating a state machine. An array of key-value pairs. For more
   * information, see Using Cost Allocation Tags in the Amazon Web Services Billing and Cost
   * Management User Guide, and Controlling Access Using IAM Tags. Tags may only contain Unicode
   * letters, digits, white space, or these symbols: _ . : / = + - \@.
   */
  tags?: Tag[];
  tracingConfiguration?: TracingConfiguration;
  /**
   * Set to true to publish the first version of the state machine during creation. The default is
   * false.
   */
  publish?: boolean;
  /**
   * Sets description about the state machine version. You can only set the description if the
   * publish parameter is set to true. Otherwise, if you set versionDescription, but publish to
   * false, this API action throws ValidationException.
   */
  versionDescription?: string;
  encryptionConfiguration?: EncryptionConfigurationAwsStepFunctionsStateMachinesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createStateMachineInputAwsStepFunctionsStateMachinesApiSchema: Schema<CreateStateMachineInputAwsStepFunctionsStateMachinesApi> =
  s.object<CreateStateMachineInputAwsStepFunctionsStateMachinesApi>(
    {
      name: s.string(),
      definition: s.string(),
      roleArn: s.string(),
      type: s.optional(s.lazy(() => typeAwsStepFunctionsStateMachinesApiSchema)),
      loggingConfiguration: s.optional(s.lazy(() => loggingConfigurationSchema)),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      tracingConfiguration: s.optional(s.lazy(() => tracingConfigurationSchema)),
      publish: s.optional(s.boolean()),
      versionDescription: s.optional(s.string()),
      encryptionConfiguration: s.optional(
        s.lazy(() => encryptionConfigurationAwsStepFunctionsStateMachinesApiSchema),
      ),
    },
    { additionalProperties: s.json() },
  );
