import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget5AwsStepFunctionsStateMachinesApi = {
  AwsStepFunctionsUpdateStateMachine: "AWSStepFunctions.UpdateStateMachine",
} as const;
export type XAmzTarget5AwsStepFunctionsStateMachinesApi =
  | (typeof XAmzTarget5AwsStepFunctionsStateMachinesApi)[keyof typeof XAmzTarget5AwsStepFunctionsStateMachinesApi]
  | (string & {});

export const xAmzTarget5AwsStepFunctionsStateMachinesApiSchema: EnumSchema<XAmzTarget5AwsStepFunctionsStateMachinesApi> =
  s.enumOf<XAmzTarget5AwsStepFunctionsStateMachinesApi>(XAmzTarget5AwsStepFunctionsStateMachinesApi);
