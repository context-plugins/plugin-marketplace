import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AwsCodeBuildProjectsApi = {
  CodeBuild20161006ListProjects: "CodeBuild_20161006.ListProjects",
} as const;
export type XAmzTarget3AwsCodeBuildProjectsApi =
  | (typeof XAmzTarget3AwsCodeBuildProjectsApi)[keyof typeof XAmzTarget3AwsCodeBuildProjectsApi]
  | (string & {});

export const xAmzTarget3AwsCodeBuildProjectsApiSchema: EnumSchema<XAmzTarget3AwsCodeBuildProjectsApi> =
  s.enumOf<XAmzTarget3AwsCodeBuildProjectsApi>(XAmzTarget3AwsCodeBuildProjectsApi);
