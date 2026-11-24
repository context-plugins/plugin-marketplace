import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  type3AwsStepFunctionsStateMachinesApiSchema,
  type Type3AwsStepFunctionsStateMachinesApi,
} from "./type3-aws-step-functions-state-machines-api.js";

export type StateMachineListItemAwsStepFunctionsStateMachinesApi = {
  /** The Amazon Resource Name (ARN) that identifies the state machine. */
  stateMachineArn: string;
  /**
   * The name of the state machine. A name must not contain: white space brackets { } [ ] wildcard
   * characters ? * special characters " # % \ ^ | ~ ` $ & , ; : / control characters (U+0000-001F,
   * U+007F-009F, U+FFFE-FFFF) surrogates (U+D800-DFFF) invalid characters ( U+10FFFF) To enable
   * logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.
   */
  name: string;
  type: Type3AwsStepFunctionsStateMachinesApi;
  /** The date the state machine is created. */
  creationDate: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stateMachineListItemAwsStepFunctionsStateMachinesApiSchema: Schema<StateMachineListItemAwsStepFunctionsStateMachinesApi> =
  s.object<StateMachineListItemAwsStepFunctionsStateMachinesApi>(
    {
      stateMachineArn: s.string(),
      name: s.string(),
      type: type3AwsStepFunctionsStateMachinesApiSchema,
      creationDate: s.dateTime(),
    },
    { additionalProperties: s.json() },
  );
