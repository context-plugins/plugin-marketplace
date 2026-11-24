import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { jobEntityRefSchema, type JobEntityRef } from "../job-entity-ref.js";

export type Taskset1 = JobEntityRef;

export const taskset1Schema: Schema<Taskset1> = s.of<Taskset1>(s.union([s.lazy(() => jobEntityRefSchema)]));
