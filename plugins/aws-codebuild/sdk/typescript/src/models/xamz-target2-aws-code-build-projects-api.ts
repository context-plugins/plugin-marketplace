import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AwsCodeBuildProjectsApi = {
  CodeBuild20161006DeleteProject: "CodeBuild_20161006.DeleteProject",
} as const;
export type XAmzTarget2AwsCodeBuildProjectsApi =
  | (typeof XAmzTarget2AwsCodeBuildProjectsApi)[keyof typeof XAmzTarget2AwsCodeBuildProjectsApi]
  | (string & {});

export const xAmzTarget2AwsCodeBuildProjectsApiSchema: EnumSchema<XAmzTarget2AwsCodeBuildProjectsApi> =
  s.enumOf<XAmzTarget2AwsCodeBuildProjectsApi>(XAmzTarget2AwsCodeBuildProjectsApi);
