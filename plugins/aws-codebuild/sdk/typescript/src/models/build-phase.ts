import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { phaseContextSchema, type PhaseContext } from "./phase-context.js";
import {
  phaseStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiSchema,
  type PhaseStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi,
} from "./phase-status-aws-code-build-aws-codebuild-xamz-target-codebuild20161006-retrybuild-api.js";
import { phaseTypeSchema, type PhaseType } from "./phase-type.js";

export type BuildPhase = {
  /**
   * The name of the build phase. Valid values include: BUILD Core build activities typically occur
   * in this build phase. COMPLETED The build has been completed. DOWNLOAD_SOURCE Source code is
   * being downloaded in this build phase. FINALIZING The build process is completing in this build
   * phase. INSTALL Installation activities typically occur in this build phase. POST_BUILD
   * Post-build activities typically occur in this build phase. PRE_BUILD Pre-build activities
   * typically occur in this build phase. PROVISIONING The build environment is being set up. QUEUED
   * The build has been submitted and is queued be
   */
  phaseType?: PhaseType;
  /**
   * The current status of the build phase. Valid values include: FAILED The build phase failed.
   * FAULT The build phase faulted. IN_PROGRESS The build phase is still in progress. STOPPED The
   * build phase stopped. SUCCEEDED The build phase succeeded. TIMED_OUT The build phase timed out.
   */
  phaseStatus?: PhaseStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi;
  /** When the build phase started, expressed in Unix time format. */
  startTime?: Date;
  /** When the build phase ended, expressed in Unix time format. */
  endTime?: Date;
  /** How long, in seconds, between the starting and ending times of the build's phase. */
  durationInSeconds?: number;
  /** Additional information about a build phase, especially to help troubleshoot a failed build. */
  contexts?: PhaseContext[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const buildPhaseSchema: Schema<BuildPhase> = s.object<BuildPhase>(
  {
    phaseType: s.optional(s.lazy(() => phaseTypeSchema)),
    phaseStatus: s.optional(
      s.lazy(() => phaseStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiSchema),
    ),
    startTime: s.optional(s.dateTime()),
    endTime: s.optional(s.dateTime()),
    durationInSeconds: s.optional(s.int()),
    contexts: s.optional(s.array(s.lazy(() => phaseContextSchema))),
  },
  { additionalProperties: s.json() },
);
