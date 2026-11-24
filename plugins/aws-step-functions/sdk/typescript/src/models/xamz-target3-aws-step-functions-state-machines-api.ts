import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AwsStepFunctionsStateMachinesApi = {
  AwsStepFunctionsDescribeStateMachineForExecution: "AWSStepFunctions.DescribeStateMachineForExecution",
} as const;
export type XAmzTarget3AwsStepFunctionsStateMachinesApi =
  | (typeof XAmzTarget3AwsStepFunctionsStateMachinesApi)[keyof typeof XAmzTarget3AwsStepFunctionsStateMachinesApi]
  | (string & {});

export const xAmzTarget3AwsStepFunctionsStateMachinesApiSchema: EnumSchema<XAmzTarget3AwsStepFunctionsStateMachinesApi> =
  s.enumOf<XAmzTarget3AwsStepFunctionsStateMachinesApi>(XAmzTarget3AwsStepFunctionsStateMachinesApi);
