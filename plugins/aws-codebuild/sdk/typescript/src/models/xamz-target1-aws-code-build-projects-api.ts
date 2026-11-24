import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AwsCodeBuildProjectsApi = {
  CodeBuild20161006CreateProject: "CodeBuild_20161006.CreateProject",
} as const;
export type XAmzTarget1AwsCodeBuildProjectsApi =
  | (typeof XAmzTarget1AwsCodeBuildProjectsApi)[keyof typeof XAmzTarget1AwsCodeBuildProjectsApi]
  | (string & {});

export const xAmzTarget1AwsCodeBuildProjectsApiSchema: EnumSchema<XAmzTarget1AwsCodeBuildProjectsApi> =
  s.enumOf<XAmzTarget1AwsCodeBuildProjectsApi>(XAmzTarget1AwsCodeBuildProjectsApi);
