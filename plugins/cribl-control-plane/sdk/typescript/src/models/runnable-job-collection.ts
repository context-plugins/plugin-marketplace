import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  inputTypeRunnableJobCollectionSchema,
  type InputTypeRunnableJobCollection,
} from "./input-type-runnable-job-collection.js";
import { jobTypeSchema, type JobType } from "./job-type.js";
import { runSchema, type Run } from "./run.js";
import { scheduleSchema, type Schedule } from "./schedule.js";
import { collector1Schema, type Collector1 } from "./unions/collector1.js";

/**
 * Configuration for a saved collection job, including Collector, input, and optional run settings.
 */
export type RunnableJobCollection = {
  /** Unique ID for this Job */
  id?: string;
  /** Description */
  description?: string;
  /** Job type */
  type?: JobType;
  /**
   * Time to keep the job's artifacts on disk after job completion. This also affects how long a job
   * is listed in the Job Inspector.
   */
  ttl?: string;
  /**
   * When enabled, this job's artifacts are not counted toward the Worker Group's finished job
   * artifacts limit. Artifacts will be removed only after the Collector's configured time to live.
   */
  ignoreGroupJobsLimit?: boolean;
  /**
   * List of fields to remove from Discover results. Wildcards (for example, aws*) are allowed. This
   * is useful when discovery returns sensitive fields that should not be exposed in the Jobs user
   * interface.
   */
  removeFields?: string[];
  /** Resume the ad hoc job if a failure condition causes Stream to restart during job execution */
  resumeOnBoot?: boolean;
  /**
   * Optionally, enable this config only on a specified Git branch. If empty, will be enabled
   * everywhere.
   */
  environment?: string;
  /** Configuration for a scheduled job */
  schedule?: Schedule;
  /** Metadata tags used for categorization and filtering. */
  streamtags?: string[];
  /** If enabled, tasks are created and run by the same Worker Node */
  workerAffinity?: boolean;
  /** Collector configuration used to discover and run the Collection job. */
  collector: Collector1;
  /**
   * Input settings for a collection job, including event breaking, routing, and preprocessing
   * options.
   */
  input?: InputTypeRunnableJobCollection;
  /** Run settings that control how and when the Collection job runs. */
  run: Run;
  /**
   * Binds 'streamtags' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'streamtags' at
   * runtime.
   */
  templateStreamtags?: string;
};

export const runnableJobCollectionSchema: Schema<RunnableJobCollection> = s.object<RunnableJobCollection>({
  id: s.optional(s.string()),
  description: s.optional(s.string()),
  type: s.optional(s.lazy(() => jobTypeSchema)),
  ttl: s.optional(s.string()),
  ignoreGroupJobsLimit: s.optional(s.boolean()),
  removeFields: s.optional(s.array(s.string())),
  resumeOnBoot: s.optional(s.boolean()),
  environment: s.optional(s.string()),
  schedule: s.optional(s.lazy(() => scheduleSchema)),
  streamtags: s.optional(s.array(s.string())),
  workerAffinity: s.optional(s.boolean()),
  collector: collector1Schema,
  input: s.optional(s.lazy(() => inputTypeRunnableJobCollectionSchema)),
  run: runSchema,
  templateStreamtags: s.optional(s.string()),
  _keysMap: {
    templateStreamtags: "__template_streamtags",
  },
});
