import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { reportExecutionSummarySchema, type ReportExecutionSummary } from "../report-execution-summary.js";

/** The latest execution summary for the report. */
export type LatestExecution = ReportExecutionSummary;

export const latestExecutionSchema: Schema<LatestExecution> = s.of<LatestExecution>(
  s.union([s.lazy(() => reportExecutionSummarySchema)]),
);
