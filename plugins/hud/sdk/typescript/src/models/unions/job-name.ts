import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type JobName = string;

export const jobNameSchema: Schema<JobName> = s.of<JobName>(s.union([s.string()]));
