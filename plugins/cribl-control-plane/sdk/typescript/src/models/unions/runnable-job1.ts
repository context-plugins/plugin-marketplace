import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { runnableJobCollectionSchema, type RunnableJobCollection } from "../runnable-job-collection.js";
import { runnableJobExecutorSchema, type RunnableJobExecutor } from "../runnable-job-executor.js";
import {
  runnableJobScheduledSearchSchema,
  type RunnableJobScheduledSearch,
} from "../runnable-job-scheduled-search.js";

export type RunnableJob1 = RunnableJobCollection | RunnableJobExecutor | RunnableJobScheduledSearch;

export const runnableJob1Schema: Schema<RunnableJob1> = s.of<RunnableJob1>(
  s.union([
    s.lazy(() => runnableJobCollectionSchema),
    s.lazy(() => runnableJobExecutorSchema),
    s.lazy(() => runnableJobScheduledSearchSchema),
  ]),
);
