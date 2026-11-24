import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobChartDataPointSchema, type JobChartDataPoint } from "./job-chart-data-point.js";
import { jobTaskCoverageSchema, type JobTaskCoverage } from "./job-task-coverage.js";
import { jobTraceSummarySchema, type JobTraceSummary } from "./job-trace-summary.js";
import { traceThumbnailModelSchema, type TraceThumbnailModel } from "./trace-thumbnail-model.js";
import { tasksetSchema, type Taskset } from "./unions/taskset.js";

export type JobEnrichmentData = {
  /** Up to 200 of the job's most recent traces; use trace_summary for whole-job counts. */
  chartData?: JobChartDataPoint[];
  /**
   * Trace counts over the whole job.
   *
   * Invalidated traces count only toward ``invalidated``. ``running`` includes traces that are
   * still cancelling, and ``queued`` is pending or initializing. ``scored`` and ``unscored`` split
   * every terminal non-error trace by whether it has a reward.
   */
  traceSummary?: JobTraceSummary;
  tasksetCoverage?: JobTaskCoverage[];
  models?: TraceThumbnailModel[];
  taskset?: Taskset;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobEnrichmentDataSchema: Schema<JobEnrichmentData> = s.object<JobEnrichmentData>(
  {
    chartData: s.optional(s.array(s.lazy(() => jobChartDataPointSchema))),
    traceSummary: s.optional(s.lazy(() => jobTraceSummarySchema)),
    tasksetCoverage: s.optional(s.array(s.lazy(() => jobTaskCoverageSchema))),
    models: s.optional(s.array(s.lazy(() => traceThumbnailModelSchema))),
    taskset: s.optional(s.lazy(() => tasksetSchema)),
    _keysMap: {
      chartData: "chart_data",
      traceSummary: "trace_summary",
      tasksetCoverage: "taskset_coverage",
    },
  },
  { additionalProperties: s.json() },
);
