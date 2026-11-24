import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi = {
  CodeBuild20161006ListBuildsForProject: "CodeBuild_20161006.ListBuildsForProject",
} as const;
export type XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi =
  | (typeof XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi)[keyof typeof XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi]
  | (string & {});

export const xAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema: EnumSchema<XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi> =
  s.enumOf<XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi>(
    XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi,
  );
