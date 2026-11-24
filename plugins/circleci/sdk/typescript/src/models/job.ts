import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { executorSchema, type Executor } from "./executor.js";
import { latestWorkflowSchema, type LatestWorkflow } from "./latest-workflow.js";
import { parallelRunSchema, type ParallelRun } from "./parallel-run.js";
import { pipelineSchema, type Pipeline } from "./pipeline.js";
import { projectInternalSchema, projectSchema, type Project } from "./project.js";

export type Job = {
  /** URL to view the job in the CircleCI web app */
  webUrl?: string;
  /** The project this job belongs to */
  project?: Project;
  /** Parallel run information */
  parallelRuns?: ParallelRun[];
  /** When the job started */
  startedAt?: Date;
  /** The latest workflow this job is part of */
  latestWorkflow?: LatestWorkflow;
  /** The name of the job */
  name?: string;
  /** The executor configuration */
  executor?: Executor;
  /** The parallelism level */
  parallelism?: number;
  /** The current status of the job */
  status?: string;
  /** The job number */
  number?: number;
  /** The pipeline this job belongs to */
  pipeline?: Pipeline;
  /** The duration of the job in milliseconds */
  duration?: number;
  /** When the job was created */
  createdAt?: Date;
  /** When the job stopped */
  stoppedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const jobProperties: s.Shape<Job> = {
  webUrl: s.optional(s.string()),
  project: s.optional(s.lazy(() => projectInternalSchema)),
  parallelRuns: s.optional(s.array(s.lazy(() => parallelRunSchema))),
  startedAt: s.optional(s.dateTime()),
  latestWorkflow: s.optional(s.lazy(() => latestWorkflowSchema)),
  name: s.optional(s.string()),
  executor: s.optional(s.lazy(() => executorSchema)),
  parallelism: s.optional(s.int()),
  status: s.optional(s.string()),
  number: s.optional(s.int()),
  pipeline: s.optional(s.lazy(() => pipelineSchema)),
  duration: s.optional(s.int()),
  createdAt: s.optional(s.dateTime()),
  stoppedAt: s.optional(s.dateTime()),
  _keysMap: {
    webUrl: "web_url",
    parallelRuns: "parallel_runs",
    startedAt: "started_at",
    latestWorkflow: "latest_workflow",
    createdAt: "created_at",
    stoppedAt: "stopped_at",
  },
};

export const jobInternalSchema: Schema<Job> = s.object<Job>(jobProperties, {
  additionalProperties: s.json(),
});

export const jobSchema: Schema<Job> = s.lazySchema(() =>
  s.object<Job>(
    {
      ...jobProperties,
      webUrl: s.optional(s.string().check(s.url())),
      project: s.optional(s.lazy(() => projectSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
