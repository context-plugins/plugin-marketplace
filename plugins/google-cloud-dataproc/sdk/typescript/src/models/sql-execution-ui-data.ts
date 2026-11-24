import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobsSchema, type Jobs } from "./jobs.js";
import { sqlPlanMetricSchema, type SqlPlanMetric } from "./sql-plan-metric.js";

/** SQL Execution Data */
export type SqlExecutionUiData = {
  modifiedConfigs?: Record<string, string>;
  physicalPlanDescription?: string;
  jobs?: Record<string, Jobs>;
  metricValues?: Record<string, string>;
  executionId?: string;
  metrics?: SqlPlanMetric[];
  rootExecutionId?: string;
  stages?: string[];
  completionTime?: string;
  metricValuesIsNull?: boolean;
  details?: string;
  submissionTime?: string;
  description?: string;
  errorMessage?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sqlExecutionUiDataSchema: Schema<SqlExecutionUiData> = s.object<SqlExecutionUiData>(
  {
    modifiedConfigs: s.optional(s.record(s.string(), s.string())),
    physicalPlanDescription: s.optional(s.string()),
    jobs: s.optional(
      s.record(
        s.string(),
        s.lazy(() => jobsSchema),
      ),
    ),
    metricValues: s.optional(s.record(s.string(), s.string())),
    executionId: s.optional(s.string()),
    metrics: s.optional(s.array(s.lazy(() => sqlPlanMetricSchema))),
    rootExecutionId: s.optional(s.string()),
    stages: s.optional(s.array(s.string())),
    completionTime: s.optional(s.string()),
    metricValuesIsNull: s.optional(s.boolean()),
    details: s.optional(s.string()),
    submissionTime: s.optional(s.string()),
    description: s.optional(s.string()),
    errorMessage: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
