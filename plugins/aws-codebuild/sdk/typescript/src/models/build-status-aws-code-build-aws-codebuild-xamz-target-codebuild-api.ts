import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the build group. FAILED The build group failed. FAULT The build group faulted.
 * IN_PROGRESS The build group is still in progress. STOPPED The build group stopped. SUCCEEDED The
 * build group succeeded. TIMED_OUT The build group timed out.
 */
export const BuildStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi = {
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
  Fault: "FAULT",
  TimedOut: "TIMED_OUT",
  InProgress: "IN_PROGRESS",
  Stopped: "STOPPED",
} as const;
export type BuildStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi =
  | (typeof BuildStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi)[keyof typeof BuildStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi]
  | (string & {});

export const buildStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema: EnumSchema<BuildStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi> =
  s.enumOf<BuildStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi>(
    BuildStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi,
  );
