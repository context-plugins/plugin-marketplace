import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type TaskName = string;

export const taskNameSchema: Schema<TaskName> = s.of<TaskName>(s.union([s.string()]));
