import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobChartDataPointSchema, type JobChartDataPoint } from "./job-chart-data-point.js";
import { jobTaskCoverageSchema, type JobTaskCoverage } from "./job-task-coverage.js";
import { jobTraceSummarySchema, type JobTraceSummary } from "./job-trace-summary.js";
import { traceThumbnailModelSchema, type TraceThumbnailModel } from "./trace-thumbnail-model.js";
import { averageAccuracySchema, type AverageAccuracy } from "./unions/average-accuracy.js";
import { completedTasksSchema, type CompletedTasks } from "./unions/completed-tasks.js";
import { failedCountSchema, type FailedCount } from "./unions/failed-count.js";
import { importedFromSchema, type ImportedFrom } from "./unions/imported-from.js";
import { jobTypeSchema, type JobType } from "./unions/job-type.js";
import { tasksetIdSchema, type TasksetId } from "./unions/taskset-id.js";
import { tasksetNameSchema, type TasksetName } from "./unions/taskset-name.js";
import { totalTasksSchema, type TotalTasks } from "./unions/total-tasks.js";
import { userAvatarUrlSchema, type UserAvatarUrl } from "./unions/user-avatar-url.js";
import { userNameSchema, type UserName } from "./unions/user-name.js";

export type EnrichedJobThumbnail = {
  id: string;
  name: string;
  status: string;
  createdAt: Date;
  averageAccuracy?: AverageAccuracy;
  totalTasks?: TotalTasks;
  completedTasks?: CompletedTasks;
  failedCount?: FailedCount;
  /** @default 0 */
  invalidatedCount?: number;
  userName?: UserName;
  userAvatarUrl?: UserAvatarUrl;
  tasksetId?: TasksetId;
  tasksetName?: TasksetName;
  metadata?: Record<string, unknown>;
  /** @default false */
  public?: boolean;
  importedFrom?: ImportedFrom;
  jobType?: JobType;
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const enrichedJobThumbnailSchema: Schema<EnrichedJobThumbnail> = s.object<EnrichedJobThumbnail>(
  {
    id: s.string(),
    name: s.string(),
    status: s.string(),
    createdAt: s.dateTime(),
    averageAccuracy: s.optional(s.lazy(() => averageAccuracySchema)),
    totalTasks: s.optional(s.lazy(() => totalTasksSchema)),
    completedTasks: s.optional(s.lazy(() => completedTasksSchema)),
    failedCount: s.optional(s.lazy(() => failedCountSchema)),
    invalidatedCount: s.defaulted(s.int(), 0),
    userName: s.optional(s.lazy(() => userNameSchema)),
    userAvatarUrl: s.optional(s.lazy(() => userAvatarUrlSchema)),
    tasksetId: s.optional(s.lazy(() => tasksetIdSchema)),
    tasksetName: s.optional(s.lazy(() => tasksetNameSchema)),
    metadata: s.optional(s.record(s.string(), s.unknown())),
    public: s.defaulted(s.boolean(), false),
    importedFrom: s.optional(s.lazy(() => importedFromSchema)),
    jobType: s.optional(s.lazy(() => jobTypeSchema)),
    chartData: s.optional(s.array(s.lazy(() => jobChartDataPointSchema))),
    traceSummary: s.optional(s.lazy(() => jobTraceSummarySchema)),
    tasksetCoverage: s.optional(s.array(s.lazy(() => jobTaskCoverageSchema))),
    models: s.optional(s.array(s.lazy(() => traceThumbnailModelSchema))),
    _keysMap: {
      createdAt: "created_at",
      averageAccuracy: "average_accuracy",
      totalTasks: "total_tasks",
      completedTasks: "completed_tasks",
      failedCount: "failed_count",
      invalidatedCount: "invalidated_count",
      userName: "user_name",
      userAvatarUrl: "user_avatar_url",
      tasksetId: "taskset_id",
      tasksetName: "taskset_name",
      importedFrom: "imported_from",
      jobType: "job_type",
      chartData: "chart_data",
      traceSummary: "trace_summary",
      tasksetCoverage: "taskset_coverage",
    },
  },
  { additionalProperties: s.json() },
);
