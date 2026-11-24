import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { phaseContextSchema, type PhaseContext } from "./phase-context.js";
import {
  phaseStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema,
  type PhaseStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi,
} from "./phase-status-aws-code-build-aws-codebuild-xamz-target-codebuild-api.js";
import {
  phaseTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema,
  type PhaseTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi,
} from "./phase-type-aws-code-build-aws-codebuild-xamz-target-codebuild-api.js";

export type BuildBatchPhase = {
  /**
   * The name of the batch build phase. Valid values include: COMBINE_ARTIFACTS Build output
   * artifacts are being combined and uploaded to the output location. DOWNLOAD_BATCHSPEC The batch
   * build specification is being downloaded. FAILED One or more of the builds failed. IN_PROGRESS
   * The batch build is in progress. STOPPED The batch build was stopped. SUBMITTED The btach build
   * has been submitted. SUCCEEDED The batch build succeeded.
   */
  phaseType?: PhaseTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi;
  /**
   * The current status of the batch build phase. Valid values include: FAILED The build phase
   * failed. FAULT The build phase faulted. IN_PROGRESS The build phase is still in progress.
   * STOPPED The build phase stopped. SUCCEEDED The build phase succeeded. TIMED_OUT The build phase
   * timed out.
   */
  phaseStatus?: PhaseStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi;
  /** When the batch build phase started, expressed in Unix time format. */
  startTime?: Date;
  /** When the batch build phase ended, expressed in Unix time format. */
  endTime?: Date;
  /** How long, in seconds, between the starting and ending times of the batch build's phase. */
  durationInSeconds?: number;
  /**
   * Additional information about the batch build phase. Especially to help troubleshoot a failed
   * batch build.
   */
  contexts?: PhaseContext[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const buildBatchPhaseSchema: Schema<BuildBatchPhase> = s.object<BuildBatchPhase>(
  {
    phaseType: s.optional(s.lazy(() => phaseTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema)),
    phaseStatus: s.optional(s.lazy(() => phaseStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema)),
    startTime: s.optional(s.dateTime()),
    endTime: s.optional(s.dateTime()),
    durationInSeconds: s.optional(s.int()),
    contexts: s.optional(s.array(s.lazy(() => phaseContextSchema))),
  },
  { additionalProperties: s.json() },
);
