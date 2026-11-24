import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AwsStepFunctionsStateMachinesApi = {
  AwsStepFunctionsDeleteStateMachine: "AWSStepFunctions.DeleteStateMachine",
} as const;
export type XAmzTarget1AwsStepFunctionsStateMachinesApi =
  | (typeof XAmzTarget1AwsStepFunctionsStateMachinesApi)[keyof typeof XAmzTarget1AwsStepFunctionsStateMachinesApi]
  | (string & {});

export const xAmzTarget1AwsStepFunctionsStateMachinesApiSchema: EnumSchema<XAmzTarget1AwsStepFunctionsStateMachinesApi> =
  s.enumOf<XAmzTarget1AwsStepFunctionsStateMachinesApi>(XAmzTarget1AwsStepFunctionsStateMachinesApi);
