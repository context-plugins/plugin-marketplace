import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobUsageCostBreakdownSchema, type JobUsageCostBreakdown } from "./job-usage-cost-breakdown.js";
import { traceUsageBreakdownSchema, type TraceUsageBreakdown } from "./trace-usage-breakdown.js";
import { jobNameSchema, type JobName } from "./unions/job-name.js";
import { noteSchema, type Note } from "./unions/note.js";
import { trainingCostSchema, type TrainingCost } from "./unions/training-cost.js";

export type JobUsageResponse = {
  jobId: string;
  jobName?: JobName;
  /** @default 0 */
  traceCount?: number;
  environmentCost?: JobUsageCostBreakdown;
  inferenceCost?: JobUsageCostBreakdown;
  /** @default false */
  inferenceCostIncomplete?: boolean;
  /** @default 0 */
  totalCost?: number;
  trainingCost?: TrainingCost;
  traces?: TraceUsageBreakdown[];
  /** @default 0 */
  environmentsStillRunning?: number;
  calculatedAt: Date;
  note?: Note;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobUsageResponseSchema: Schema<JobUsageResponse> = s.object<JobUsageResponse>(
  {
    jobId: s.string(),
    jobName: s.optional(s.lazy(() => jobNameSchema)),
    traceCount: s.defaulted(s.int(), 0),
    environmentCost: s.optional(s.lazy(() => jobUsageCostBreakdownSchema)),
    inferenceCost: s.optional(s.lazy(() => jobUsageCostBreakdownSchema)),
    inferenceCostIncomplete: s.defaulted(s.boolean(), false),
    totalCost: s.defaulted(s.float64(), 0),
    trainingCost: s.optional(s.lazy(() => trainingCostSchema)),
    traces: s.optional(s.array(s.lazy(() => traceUsageBreakdownSchema))),
    environmentsStillRunning: s.defaulted(s.int(), 0),
    calculatedAt: s.dateTime(),
    note: s.optional(s.lazy(() => noteSchema)),
    _keysMap: {
      jobId: "job_id",
      jobName: "job_name",
      traceCount: "trace_count",
      environmentCost: "environment_cost",
      inferenceCost: "inference_cost",
      inferenceCostIncomplete: "inference_cost_incomplete",
      totalCost: "total_cost",
      trainingCost: "training_cost",
      environmentsStillRunning: "environments_still_running",
      calculatedAt: "calculated_at",
    },
  },
  { additionalProperties: s.json() },
);
