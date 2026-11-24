import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApi = {
  CodeBuild20161006StartBuild: "CodeBuild_20161006.StartBuild",
} as const;
export type XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApi =
  | (typeof XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApi)[keyof typeof XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApi]
  | (string & {});

export const xAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApiSchema: EnumSchema<XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApi> =
  s.enumOf<XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApi>(
    XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApi,
  );
