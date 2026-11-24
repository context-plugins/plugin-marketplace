import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the build phase. Valid values include: FAILED The build phase failed. FAULT
 * The build phase faulted. IN_PROGRESS The build phase is still in progress. STOPPED The build
 * phase stopped. SUCCEEDED The build phase succeeded. TIMED_OUT The build phase timed out.
 */
export const PhaseStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi = {
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
  Fault: "FAULT",
  TimedOut: "TIMED_OUT",
  InProgress: "IN_PROGRESS",
  Stopped: "STOPPED",
} as const;
export type PhaseStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi =
  | (typeof PhaseStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi)[keyof typeof PhaseStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi]
  | (string & {});

export const phaseStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiSchema: EnumSchema<PhaseStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi> =
  s.enumOf<PhaseStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi>(
    PhaseStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi,
  );
