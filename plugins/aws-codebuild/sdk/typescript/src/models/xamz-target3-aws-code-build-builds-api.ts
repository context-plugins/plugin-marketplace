import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AwsCodeBuildBuildsApi = {
  CodeBuild20161006ListBuildsForProject: "CodeBuild_20161006.ListBuildsForProject",
} as const;
export type XAmzTarget3AwsCodeBuildBuildsApi =
  | (typeof XAmzTarget3AwsCodeBuildBuildsApi)[keyof typeof XAmzTarget3AwsCodeBuildBuildsApi]
  | (string & {});

export const xAmzTarget3AwsCodeBuildBuildsApiSchema: EnumSchema<XAmzTarget3AwsCodeBuildBuildsApi> =
  s.enumOf<XAmzTarget3AwsCodeBuildBuildsApi>(XAmzTarget3AwsCodeBuildBuildsApi);
