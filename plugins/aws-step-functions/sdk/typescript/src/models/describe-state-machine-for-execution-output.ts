import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { encryptionConfigurationSchema, type EncryptionConfiguration } from "./encryption-configuration.js";
import { loggingConfigurationSchema, type LoggingConfiguration } from "./logging-configuration.js";
import { tracingConfigurationSchema, type TracingConfiguration } from "./tracing-configuration.js";

export type DescribeStateMachineForExecutionOutput = {
  /** The Amazon Resource Name (ARN) of the state machine associated with the execution. */
  stateMachineArn: string;
  /** The name of the state machine associated with the execution. */
  name: string;
  /** The Amazon States Language definition of the state machine. See Amazon States Language. */
  definition: string;
  /** The Amazon Resource Name (ARN) of the IAM role of the State Machine for the execution. */
  roleArn: string;
  /**
   * The date and time the state machine associated with an execution was updated. For a newly
   * created state machine, this is the creation date.
   */
  updateDate: Date;
  loggingConfiguration?: LoggingConfiguration;
  tracingConfiguration?: TracingConfiguration;
  /**
   * The Amazon Resource Name (ARN) of the Map Run that started the child workflow execution. This
   * field is returned only if the executionArn is a child workflow execution that was started by a
   * Distributed Map state.
   */
  mapRunArn?: string;
  /**
   * A user-defined or an auto-generated string that identifies a Map state. This field is returned
   * only if the executionArn is a child workflow execution that was started by a Distributed Map
   * state.
   */
  label?: string;
  /**
   * The revision identifier for the state machine. The first revision ID when you create the state
   * machine is null. Use the state machine revisionId parameter to compare the revision of a state
   * machine with the configuration of the state machine used for executions without performing a
   * diff of the properties, such as definition and roleArn.
   */
  revisionId?: string;
  encryptionConfiguration?: EncryptionConfiguration;
  /**
   * A map of state name to a list of variables referenced by that state. States that do not use
   * variable references will not be shown in the response.
   */
  variableReferences?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeStateMachineForExecutionOutputSchema: Schema<DescribeStateMachineForExecutionOutput> =
  s.object<DescribeStateMachineForExecutionOutput>(
    {
      stateMachineArn: s.string(),
      name: s.string(),
      definition: s.string(),
      roleArn: s.string(),
      updateDate: s.dateTime(),
      loggingConfiguration: s.optional(s.lazy(() => loggingConfigurationSchema)),
      tracingConfiguration: s.optional(s.lazy(() => tracingConfigurationSchema)),
      mapRunArn: s.optional(s.string()),
      label: s.optional(s.string()),
      revisionId: s.optional(s.string()),
      encryptionConfiguration: s.optional(s.lazy(() => encryptionConfigurationSchema)),
      variableReferences: s.optional(s.record(s.string(), s.unknown())),
    },
    { additionalProperties: s.json() },
  );
