import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AwsCodeBuildCommandExecutionApi = {
  CodeBuild20161006StartCommandExecution: "CodeBuild_20161006.StartCommandExecution",
} as const;
export type XAmzTarget2AwsCodeBuildCommandExecutionApi =
  | (typeof XAmzTarget2AwsCodeBuildCommandExecutionApi)[keyof typeof XAmzTarget2AwsCodeBuildCommandExecutionApi]
  | (string & {});

export const xAmzTarget2AwsCodeBuildCommandExecutionApiSchema: EnumSchema<XAmzTarget2AwsCodeBuildCommandExecutionApi> =
  s.enumOf<XAmzTarget2AwsCodeBuildCommandExecutionApi>(XAmzTarget2AwsCodeBuildCommandExecutionApi);
