import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { batchReportModeSchema, type BatchReportMode } from "./batch-report-mode.js";
import { batchRestrictionsSchema, type BatchRestrictions } from "./batch-restrictions.js";

export type ProjectBuildBatchConfig = {
  /** Specifies the service role ARN for the batch build project. */
  serviceRole?: string;
  /**
   * Specifies if the build artifacts for the batch build should be combined into a single artifact
   * location.
   */
  combineArtifacts?: boolean;
  restrictions?: BatchRestrictions;
  /**
   * Specifies the maximum amount of time, in minutes, that the batch build must be completed in.
   */
  timeoutInMins?: number;
  /**
   * Specifies how build status reports are sent to the source provider for the batch build. This
   * property is only used when the source provider for your project is Bitbucket, GitHub, or GitHub
   * Enterprise, and your project is configured to report build statuses to the source provider.
   * REPORT_AGGREGATED_BATCH (Default) Aggregate all of the build statuses into a single status
   * report. REPORT_INDIVIDUAL_BUILDS Send a separate status report for each individual build.
   */
  batchReportMode?: BatchReportMode;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectBuildBatchConfigSchema: Schema<ProjectBuildBatchConfig> =
  s.object<ProjectBuildBatchConfig>(
    {
      serviceRole: s.optional(s.string()),
      combineArtifacts: s.optional(s.boolean()),
      restrictions: s.optional(s.lazy(() => batchRestrictionsSchema)),
      timeoutInMins: s.optional(s.int()),
      batchReportMode: s.optional(s.lazy(() => batchReportModeSchema)),
    },
    { additionalProperties: s.json() },
  );
