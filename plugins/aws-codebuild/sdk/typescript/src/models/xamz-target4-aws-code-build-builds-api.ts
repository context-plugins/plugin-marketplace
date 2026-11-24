import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget4AwsCodeBuildBuildsApi = {
  CodeBuild20161006StartBuild: "CodeBuild_20161006.StartBuild",
} as const;
export type XAmzTarget4AwsCodeBuildBuildsApi =
  | (typeof XAmzTarget4AwsCodeBuildBuildsApi)[keyof typeof XAmzTarget4AwsCodeBuildBuildsApi]
  | (string & {});

export const xAmzTarget4AwsCodeBuildBuildsApiSchema: EnumSchema<XAmzTarget4AwsCodeBuildBuildsApi> =
  s.enumOf<XAmzTarget4AwsCodeBuildBuildsApi>(XAmzTarget4AwsCodeBuildBuildsApi);
