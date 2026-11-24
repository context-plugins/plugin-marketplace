import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { jobEnrichmentTasksetSchema, type JobEnrichmentTaskset } from "../job-enrichment-taskset.js";

export type Taskset = JobEnrichmentTaskset;

export const tasksetSchema: Schema<Taskset> = s.of<Taskset>(
  s.union([s.lazy(() => jobEnrichmentTasksetSchema)]),
);
