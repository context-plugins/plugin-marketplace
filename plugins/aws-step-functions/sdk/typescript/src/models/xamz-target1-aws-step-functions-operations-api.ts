import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AwsStepFunctionsOperationsApi = {
  AwsStepFunctionsRedriveExecution: "AWSStepFunctions.RedriveExecution",
} as const;
export type XAmzTarget1AwsStepFunctionsOperationsApi =
  | (typeof XAmzTarget1AwsStepFunctionsOperationsApi)[keyof typeof XAmzTarget1AwsStepFunctionsOperationsApi]
  | (string & {});

export const xAmzTarget1AwsStepFunctionsOperationsApiSchema: EnumSchema<XAmzTarget1AwsStepFunctionsOperationsApi> =
  s.enumOf<XAmzTarget1AwsStepFunctionsOperationsApi>(XAmzTarget1AwsStepFunctionsOperationsApi);
