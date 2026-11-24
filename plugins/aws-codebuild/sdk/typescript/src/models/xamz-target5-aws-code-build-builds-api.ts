import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget5AwsCodeBuildBuildsApi = {
  CodeBuild20161006StopBuild: "CodeBuild_20161006.StopBuild",
} as const;
export type XAmzTarget5AwsCodeBuildBuildsApi =
  | (typeof XAmzTarget5AwsCodeBuildBuildsApi)[keyof typeof XAmzTarget5AwsCodeBuildBuildsApi]
  | (string & {});

export const xAmzTarget5AwsCodeBuildBuildsApiSchema: EnumSchema<XAmzTarget5AwsCodeBuildBuildsApi> =
  s.enumOf<XAmzTarget5AwsCodeBuildBuildsApi>(XAmzTarget5AwsCodeBuildBuildsApi);
