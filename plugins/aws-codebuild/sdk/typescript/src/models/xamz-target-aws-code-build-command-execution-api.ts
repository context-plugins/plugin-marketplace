import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAwsCodeBuildCommandExecutionApi = {
  CodeBuild20161006BatchGetCommandExecutions: "CodeBuild_20161006.BatchGetCommandExecutions",
} as const;
export type XAmzTargetAwsCodeBuildCommandExecutionApi =
  | (typeof XAmzTargetAwsCodeBuildCommandExecutionApi)[keyof typeof XAmzTargetAwsCodeBuildCommandExecutionApi]
  | (string & {});

export const xAmzTargetAwsCodeBuildCommandExecutionApiSchema: EnumSchema<XAmzTargetAwsCodeBuildCommandExecutionApi> =
  s.enumOf<XAmzTargetAwsCodeBuildCommandExecutionApi>(XAmzTargetAwsCodeBuildCommandExecutionApi);
