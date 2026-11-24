import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApi = {
  AwsStepFunctionsDescribeStateMachineAlias: "AWSStepFunctions.DescribeStateMachineAlias",
} as const;
export type XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApi =
  | (typeof XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApi)[keyof typeof XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApi]
  | (string & {});

export const xAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApiSchema: EnumSchema<XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApi> =
  s.enumOf<XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApi>(
    XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApi,
  );
