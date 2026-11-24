import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi = {
  CodeBuild20161006BatchDeleteBuilds: "CodeBuild_20161006.BatchDeleteBuilds",
} as const;
export type XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi =
  | (typeof XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi)[keyof typeof XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi]
  | (string & {});

export const xAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema: EnumSchema<XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi> =
  s.enumOf<XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi>(
    XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi,
  );
