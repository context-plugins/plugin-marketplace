import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The taskset to upload to; taskset_name is then ignored */
export type TasksetId = string;

export const tasksetIdSchema: Schema<TasksetId> = s.of<TasksetId>(s.union([s.string()]));
