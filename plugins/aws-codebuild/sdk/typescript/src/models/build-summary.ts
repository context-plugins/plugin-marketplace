import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  buildStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema,
  type BuildStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi,
} from "./build-status-aws-code-build-aws-codebuild-xamz-target-codebuild-api.js";
import { resolvedArtifactSchema, type ResolvedArtifact } from "./resolved-artifact.js";

export type BuildSummary = {
  /** The batch build ARN. */
  arn?: string;
  /** When the build was started, expressed in Unix time format. */
  requestedOn?: Date;
  /**
   * The status of the build group. FAILED The build group failed. FAULT The build group faulted.
   * IN_PROGRESS The build group is still in progress. STOPPED The build group stopped. SUCCEEDED
   * The build group succeeded. TIMED_OUT The build group timed out.
   */
  buildStatus?: BuildStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi;
  primaryArtifact?: ResolvedArtifact;
  /**
   * An array of ResolvedArtifact objects that represents the secondary build artifacts for the
   * build group.
   */
  secondaryArtifacts?: ResolvedArtifact[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const buildSummarySchema: Schema<BuildSummary> = s.object<BuildSummary>(
  {
    arn: s.optional(s.string()),
    requestedOn: s.optional(s.dateTime()),
    buildStatus: s.optional(s.lazy(() => buildStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema)),
    primaryArtifact: s.optional(s.lazy(() => resolvedArtifactSchema)),
    secondaryArtifacts: s.optional(s.array(s.lazy(() => resolvedArtifactSchema))),
  },
  { additionalProperties: s.json() },
);
