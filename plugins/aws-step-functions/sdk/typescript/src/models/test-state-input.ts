import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inspectionLevelSchema, type InspectionLevel } from "./inspection-level.js";
import { mockInputSchema, type MockInput } from "./mock-input.js";
import { testStateConfigurationSchema, type TestStateConfiguration } from "./test-state-configuration.js";

export type TestStateInput = {
  /** The Amazon States Language (ASL) definition of the state or state machine. */
  definition: string;
  /**
   * The Amazon Resource Name (ARN) of the execution role with the required IAM permissions for the
   * state.
   */
  roleArn?: string;
  /** A string that contains the JSON input data for the state. */
  input?: string;
  /**
   * Determines the values to return when a state is tested. You can specify one of the following
   * types: INFO: Shows the final state output. By default, Step Functions sets inspectionLevel to
   * INFO if you don't specify a level. DEBUG: Shows the final state output along with the input and
   * output data processing result. TRACE: Shows the HTTP request and response for an HTTP Task.
   * This level also shows the final state output along with the input and output data processing
   * result. Each of these levels also provide information about the status of the state execution
   * and the next state to transition to.
   */
  inspectionLevel?: InspectionLevel;
  /**
   * Specifies whether or not to include secret information in the test result. For HTTP Tasks, a
   * secret includes the data that an EventBridge connection adds to modify the HTTP request
   * headers, query parameters, and body. Step Functions doesn't omit any information included in
   * the state definition or the HTTP response. If you set revealSecrets to true, you must make sure
   * that the IAM user that calls the TestState API has permission for the states:RevealSecrets
   * action. For an example of IAM policy that sets the states:RevealSecrets permission, see IAM
   * permissions to test a state. Without this permi
   */
  revealSecrets?: boolean;
  /**
   * JSON object literal that sets variables used in the state under test. Object keys are the
   * variable names and values are the variable values.
   */
  variables?: string;
  /**
   * Denotes the particular state within a state machine definition to be tested. If this field is
   * specified, the definition must contain a fully-formed state machine definition.
   */
  stateName?: string;
  mock?: MockInput;
  /**
   * A JSON string representing a valid Context object for the state under test. This field may only
   * be specified if a mock is specified in the same request.
   */
  context?: string;
  stateConfiguration?: TestStateConfiguration;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testStateInputSchema: Schema<TestStateInput> = s.object<TestStateInput>(
  {
    definition: s.string(),
    roleArn: s.optional(s.string()),
    input: s.optional(s.string()),
    inspectionLevel: s.optional(s.lazy(() => inspectionLevelSchema)),
    revealSecrets: s.optional(s.boolean()),
    variables: s.optional(s.string()),
    stateName: s.optional(s.string()),
    mock: s.optional(s.lazy(() => mockInputSchema)),
    context: s.optional(s.string()),
    stateConfiguration: s.optional(s.lazy(() => testStateConfigurationSchema)),
  },
  { additionalProperties: s.json() },
);
