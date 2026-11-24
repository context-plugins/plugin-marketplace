import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi = {
  CodeBuild20161006BatchGetBuilds: "CodeBuild_20161006.BatchGetBuilds",
} as const;
export type XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi =
  | (typeof XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi)[keyof typeof XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi]
  | (string & {});

export const xAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema: EnumSchema<XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi> =
  s.enumOf<XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi>(
    XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi,
  );
