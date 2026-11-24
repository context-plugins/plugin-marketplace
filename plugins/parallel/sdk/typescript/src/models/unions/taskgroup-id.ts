import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** ID of the taskgroup to which the run belongs. */
export type TaskgroupId = string;

export const taskgroupIdSchema: Schema<TaskgroupId> = s.of<TaskgroupId>(s.union([s.string()]));
