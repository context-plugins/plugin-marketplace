import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AwsStepFunctionsStateMachinesApi = {
  AwsStepFunctionsDescribeStateMachine: "AWSStepFunctions.DescribeStateMachine",
} as const;
export type XAmzTarget2AwsStepFunctionsStateMachinesApi =
  | (typeof XAmzTarget2AwsStepFunctionsStateMachinesApi)[keyof typeof XAmzTarget2AwsStepFunctionsStateMachinesApi]
  | (string & {});

export const xAmzTarget2AwsStepFunctionsStateMachinesApiSchema: EnumSchema<XAmzTarget2AwsStepFunctionsStateMachinesApi> =
  s.enumOf<XAmzTarget2AwsStepFunctionsStateMachinesApi>(XAmzTarget2AwsStepFunctionsStateMachinesApi);
