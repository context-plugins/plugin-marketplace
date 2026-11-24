import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status used to filter reports. You can filter using one status only. */
export const StatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi = {
  Generating: "GENERATING",
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
  Incomplete: "INCOMPLETE",
  Deleting: "DELETING",
} as const;
export type StatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi =
  | (typeof StatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi)[keyof typeof StatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi]
  | (string & {});

export const statusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApiSchema: EnumSchema<StatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi> =
  s.enumOf<StatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi>(
    StatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi,
  );
