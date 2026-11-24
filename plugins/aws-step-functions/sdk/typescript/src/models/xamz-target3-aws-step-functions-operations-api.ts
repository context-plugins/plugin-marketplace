import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AwsStepFunctionsOperationsApi = {
  AwsStepFunctionsValidateStateMachineDefinition: "AWSStepFunctions.ValidateStateMachineDefinition",
} as const;
export type XAmzTarget3AwsStepFunctionsOperationsApi =
  | (typeof XAmzTarget3AwsStepFunctionsOperationsApi)[keyof typeof XAmzTarget3AwsStepFunctionsOperationsApi]
  | (string & {});

export const xAmzTarget3AwsStepFunctionsOperationsApiSchema: EnumSchema<XAmzTarget3AwsStepFunctionsOperationsApi> =
  s.enumOf<XAmzTarget3AwsStepFunctionsOperationsApi>(XAmzTarget3AwsStepFunctionsOperationsApi);
