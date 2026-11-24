import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApi = {
  CodeBuild20161006StopBuild: "CodeBuild_20161006.StopBuild",
} as const;
export type XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApi =
  | (typeof XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApi)[keyof typeof XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApi]
  | (string & {});

export const xAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApiSchema: EnumSchema<XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApi> =
  s.enumOf<XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApi>(
    XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApi,
  );
