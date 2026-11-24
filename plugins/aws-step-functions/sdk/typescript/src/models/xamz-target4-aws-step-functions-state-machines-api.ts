import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget4AwsStepFunctionsStateMachinesApi = {
  AwsStepFunctionsListStateMachines: "AWSStepFunctions.ListStateMachines",
} as const;
export type XAmzTarget4AwsStepFunctionsStateMachinesApi =
  | (typeof XAmzTarget4AwsStepFunctionsStateMachinesApi)[keyof typeof XAmzTarget4AwsStepFunctionsStateMachinesApi]
  | (string & {});

export const xAmzTarget4AwsStepFunctionsStateMachinesApiSchema: EnumSchema<XAmzTarget4AwsStepFunctionsStateMachinesApi> =
  s.enumOf<XAmzTarget4AwsStepFunctionsStateMachinesApi>(XAmzTarget4AwsStepFunctionsStateMachinesApi);
