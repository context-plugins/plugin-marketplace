import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget4AwsCodeBuildProjectsApi = {
  CodeBuild20161006UpdateProject: "CodeBuild_20161006.UpdateProject",
} as const;
export type XAmzTarget4AwsCodeBuildProjectsApi =
  | (typeof XAmzTarget4AwsCodeBuildProjectsApi)[keyof typeof XAmzTarget4AwsCodeBuildProjectsApi]
  | (string & {});

export const xAmzTarget4AwsCodeBuildProjectsApiSchema: EnumSchema<XAmzTarget4AwsCodeBuildProjectsApi> =
  s.enumOf<XAmzTarget4AwsCodeBuildProjectsApi>(XAmzTarget4AwsCodeBuildProjectsApi);
