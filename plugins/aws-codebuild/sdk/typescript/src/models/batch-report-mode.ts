import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies how build status reports are sent to the source provider for the batch build. This
 * property is only used when the source provider for your project is Bitbucket, GitHub, or GitHub
 * Enterprise, and your project is configured to report build statuses to the source provider.
 * REPORT_AGGREGATED_BATCH (Default) Aggregate all of the build statuses into a single status
 * report. REPORT_INDIVIDUAL_BUILDS Send a separate status report for each individual build.
 */
export const BatchReportMode = {
  ReportIndividualBuilds: "REPORT_INDIVIDUAL_BUILDS",
  ReportAggregatedBatch: "REPORT_AGGREGATED_BATCH",
} as const;
export type BatchReportMode = (typeof BatchReportMode)[keyof typeof BatchReportMode] | (string & {});

export const batchReportModeSchema: EnumSchema<BatchReportMode> = s.enumOf<BatchReportMode>(BatchReportMode);
