import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAwsStepFunctionsStateMachinesApi = {
  AwsStepFunctionsCreateStateMachine: "AWSStepFunctions.CreateStateMachine",
} as const;
export type XAmzTargetAwsStepFunctionsStateMachinesApi =
  | (typeof XAmzTargetAwsStepFunctionsStateMachinesApi)[keyof typeof XAmzTargetAwsStepFunctionsStateMachinesApi]
  | (string & {});

export const xAmzTargetAwsStepFunctionsStateMachinesApiSchema: EnumSchema<XAmzTargetAwsStepFunctionsStateMachinesApi> =
  s.enumOf<XAmzTargetAwsStepFunctionsStateMachinesApi>(XAmzTargetAwsStepFunctionsStateMachinesApi);
