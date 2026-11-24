import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAwsCodeBuildProjectsApi = {
  CodeBuild20161006BatchGetProjects: "CodeBuild_20161006.BatchGetProjects",
} as const;
export type XAmzTargetAwsCodeBuildProjectsApi =
  | (typeof XAmzTargetAwsCodeBuildProjectsApi)[keyof typeof XAmzTargetAwsCodeBuildProjectsApi]
  | (string & {});

export const xAmzTargetAwsCodeBuildProjectsApiSchema: EnumSchema<XAmzTargetAwsCodeBuildProjectsApi> =
  s.enumOf<XAmzTargetAwsCodeBuildProjectsApi>(XAmzTargetAwsCodeBuildProjectsApi);
