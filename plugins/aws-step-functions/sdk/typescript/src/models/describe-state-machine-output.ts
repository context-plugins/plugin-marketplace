import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { encryptionConfigurationSchema, type EncryptionConfiguration } from "./encryption-configuration.js";
import { loggingConfigurationSchema, type LoggingConfiguration } from "./logging-configuration.js";
import { status2Schema, type Status2 } from "./status2.js";
import { tracingConfigurationSchema, type TracingConfiguration } from "./tracing-configuration.js";
import { type2Schema, type Type2 } from "./type2.js";

export type DescribeStateMachineOutput = {
  /**
   * The Amazon Resource Name (ARN) that identifies the state machine. If you specified a state
   * machine version ARN in your request, the API returns the version ARN. The version ARN is a
   * combination of state machine ARN and the version number separated by a colon (:). For example,
   * stateMachineARN:1.
   */
  stateMachineArn: string;
  /**
   * The name of the state machine. A name must not contain: white space brackets { } [ ] wildcard
   * characters ? * special characters " # % \ ^ | ~ ` $ & , ; : / control characters (U+0000-001F,
   * U+007F-009F, U+FFFE-FFFF) surrogates (U+D800-DFFF) invalid characters ( U+10FFFF) To enable
   * logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.
   */
  name: string;
  /** The current status of the state machine. */
  status?: Status2;
  /**
   * The Amazon States Language definition of the state machine. See Amazon States Language. If
   * called with includedData = METADATA_ONLY, the returned definition will be {}.
   */
  definition: string;
  /**
   * The Amazon Resource Name (ARN) of the IAM role used when creating this state machine. (The IAM
   * role maintains security by granting Step Functions access to Amazon Web Services resources.)
   */
  roleArn: string;
  /** The type of the state machine (STANDARD or EXPRESS). */
  type: Type2;
  /**
   * The date the state machine is created. For a state machine version, creationDate is the date
   * the version was created.
   */
  creationDate: Date;
  loggingConfiguration?: LoggingConfiguration;
  tracingConfiguration?: TracingConfiguration;
  /**
   * A user-defined or an auto-generated string that identifies a Map state. This parameter is
   * present only if the stateMachineArn specified in input is a qualified state machine ARN.
   */
  label?: string;
  /**
   * The revision identifier for the state machine. Use the revisionId parameter to compare between
   * versions of a state machine configuration used for executions without performing a diff of the
   * properties, such as definition and roleArn.
   */
  revisionId?: string;
  /** The description of the state machine version. */
  description?: string;
  encryptionConfiguration?: EncryptionConfiguration;
  /**
   * A map of state name to a list of variables referenced by that state. States that do not use
   * variable references will not be shown in the response.
   */
  variableReferences?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeStateMachineOutputSchema: Schema<DescribeStateMachineOutput> =
  s.object<DescribeStateMachineOutput>(
    {
      stateMachineArn: s.string(),
      name: s.string(),
      status: s.optional(s.lazy(() => status2Schema)),
      definition: s.string(),
      roleArn: s.string(),
      type: type2Schema,
      creationDate: s.dateTime(),
      loggingConfiguration: s.optional(s.lazy(() => loggingConfigurationSchema)),
      tracingConfiguration: s.optional(s.lazy(() => tracingConfigurationSchema)),
      label: s.optional(s.string()),
      revisionId: s.optional(s.string()),
      description: s.optional(s.string()),
      encryptionConfiguration: s.optional(s.lazy(() => encryptionConfigurationSchema)),
      variableReferences: s.optional(s.record(s.string(), s.unknown())),
    },
    { additionalProperties: s.json() },
  );
