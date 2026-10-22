import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { runnableJobCollectionSchema, type RunnableJobCollection } from "../runnable-job-collection.js";
import { runnableJobExecutorSchema, type RunnableJobExecutor } from "../runnable-job-executor.js";
import {
  runnableJobScheduledSearchSchema,
  type RunnableJobScheduledSearch,
} from "../runnable-job-scheduled-search.js";

/** Configuration and run settings used to launch the job. */
export type RunnableJob = RunnableJobCollection | RunnableJobExecutor | RunnableJobScheduledSearch;

export const runnableJobSchema: Schema<RunnableJob> = s.of<RunnableJob>(
  s.union([
    s.lazy(() => runnableJobCollectionSchema),
    s.lazy(() => runnableJobExecutorSchema),
    s.lazy(() => runnableJobScheduledSearchSchema),
  ]),
);
