import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type TaskId = string;

export const taskIdSchema: Schema<TaskId> = s.of<TaskId>(s.union([s.string()]));
