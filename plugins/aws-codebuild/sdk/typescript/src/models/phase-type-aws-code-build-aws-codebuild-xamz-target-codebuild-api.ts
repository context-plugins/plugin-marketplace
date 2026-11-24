import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The name of the batch build phase. Valid values include: COMBINE_ARTIFACTS Build output artifacts
 * are being combined and uploaded to the output location. DOWNLOAD_BATCHSPEC The batch build
 * specification is being downloaded. FAILED One or more of the builds failed. IN_PROGRESS The batch
 * build is in progress. STOPPED The batch build was stopped. SUBMITTED The btach build has been
 * submitted. SUCCEEDED The batch build succeeded.
 */
export const PhaseTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi = {
  Submitted: "SUBMITTED",
  DownloadBatchspec: "DOWNLOAD_BATCHSPEC",
  InProgress: "IN_PROGRESS",
  CombineArtifacts: "COMBINE_ARTIFACTS",
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
  Stopped: "STOPPED",
} as const;
export type PhaseTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi =
  | (typeof PhaseTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi)[keyof typeof PhaseTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi]
  | (string & {});

export const phaseTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema: EnumSchema<PhaseTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi> =
  s.enumOf<PhaseTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi>(
    PhaseTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi,
  );
