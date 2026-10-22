import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { jobStatus2Schema, type JobStatus2 } from "./job-status2.js";
import {
  additionalPropertiesTypeJobInfoStatsSchema,
  type AdditionalPropertiesTypeJobInfoStats,
} from "./unions/additional-properties-type-job-info-stats.js";
import { runnableJobSchema, type RunnableJob } from "./unions/runnable-job.js";

/** Detailed information about a job, including its configuration, status, and statistics. */
export type JobInfo = {
  /** Configuration and run settings used to launch the job. */
  args: RunnableJob;
  /** Unique identifier for the job. */
  id: string;
  /**
   * If <code>true</code>, retain the job and its artifacts instead of deleting according to the
   * time-to-live or retention policy. The job persists until it is manually deleted.
   */
  keep?: boolean;
  /** Counters and metrics collected during job execution. */
  stats: Record<string, AdditionalPropertiesTypeJobInfoStats>;
  /** Status of the job. */
  status: JobStatus2;
  /**
   * The GUID of the worker node that owns this artifact, set when the job ran on a Captain while
   * the leader was offline. When present, the leader proxies read access to the artifact; mutating
   * actions (replay, delete, stop) are not supported.
   */
  workerOwner?: string;
};

export const jobInfoSchema: Schema<JobInfo> = s.object<JobInfo>({
  args: runnableJobSchema,
  id: s.string(),
  keep: s.optional(s.boolean()),
  stats: s.record(
    s.string(),
    s.lazy(() => additionalPropertiesTypeJobInfoStatsSchema),
  ),
  status: jobStatus2Schema,
  workerOwner: s.optional(s.string()),
});
