import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { savedJobCollectionSchema, type SavedJobCollection } from "../saved-job-collection.js";
import { savedJobExecutorSchema, type SavedJobExecutor } from "../saved-job-executor.js";
import {
  savedJobScheduledSearchSchema,
  type SavedJobScheduledSearch,
} from "../saved-job-scheduled-search.js";

export type SavedJob = SavedJobCollection | SavedJobExecutor | SavedJobScheduledSearch;

export const savedJobSchema: Schema<SavedJob> = s.of<SavedJob>(
  s.union([
    s.lazy(() => savedJobCollectionSchema),
    s.lazy(() => savedJobExecutorSchema),
    s.lazy(() => savedJobScheduledSearchSchema),
  ]),
);
