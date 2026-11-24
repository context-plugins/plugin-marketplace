import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi = {
  CodeBuild20161006ListProjects: "CodeBuild_20161006.ListProjects",
} as const;
export type XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi =
  | (typeof XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi)[keyof typeof XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi]
  | (string & {});

export const xAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApiSchema: EnumSchema<XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi> =
  s.enumOf<XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi>(
    XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi,
  );
