import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AwsStepFunctionsOperationsApi = {
  AwsStepFunctionsTestState: "AWSStepFunctions.TestState",
} as const;
export type XAmzTarget2AwsStepFunctionsOperationsApi =
  | (typeof XAmzTarget2AwsStepFunctionsOperationsApi)[keyof typeof XAmzTarget2AwsStepFunctionsOperationsApi]
  | (string & {});

export const xAmzTarget2AwsStepFunctionsOperationsApiSchema: EnumSchema<XAmzTarget2AwsStepFunctionsOperationsApi> =
  s.enumOf<XAmzTarget2AwsStepFunctionsOperationsApi>(XAmzTarget2AwsStepFunctionsOperationsApi);
