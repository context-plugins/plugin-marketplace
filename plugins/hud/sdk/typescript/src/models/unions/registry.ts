import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { jobEntityRefSchema, type JobEntityRef } from "../job-entity-ref.js";

export type Registry = JobEntityRef;

export const registrySchema: Schema<Registry> = s.of<Registry>(s.union([s.lazy(() => jobEntityRefSchema)]));
