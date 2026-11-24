import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AwsCodeBuildCommandExecutionApi = {
  CodeBuild20161006ListCommandExecutionsForSandbox: "CodeBuild_20161006.ListCommandExecutionsForSandbox",
} as const;
export type XAmzTarget1AwsCodeBuildCommandExecutionApi =
  | (typeof XAmzTarget1AwsCodeBuildCommandExecutionApi)[keyof typeof XAmzTarget1AwsCodeBuildCommandExecutionApi]
  | (string & {});

export const xAmzTarget1AwsCodeBuildCommandExecutionApiSchema: EnumSchema<XAmzTarget1AwsCodeBuildCommandExecutionApi> =
  s.enumOf<XAmzTarget1AwsCodeBuildCommandExecutionApi>(XAmzTarget1AwsCodeBuildCommandExecutionApi);
