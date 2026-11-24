import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AwsCodeBuildBuildsApi = {
  CodeBuild20161006ListBuilds: "CodeBuild_20161006.ListBuilds",
} as const;
export type XAmzTarget2AwsCodeBuildBuildsApi =
  | (typeof XAmzTarget2AwsCodeBuildBuildsApi)[keyof typeof XAmzTarget2AwsCodeBuildBuildsApi]
  | (string & {});

export const xAmzTarget2AwsCodeBuildBuildsApiSchema: EnumSchema<XAmzTarget2AwsCodeBuildBuildsApi> =
  s.enumOf<XAmzTarget2AwsCodeBuildBuildsApi>(XAmzTarget2AwsCodeBuildBuildsApi);
