import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type JobId = string;

export const jobIdSchema: Schema<JobId> = s.of<JobId>(s.union([s.string()]));
