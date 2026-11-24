import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type TasksetName = string;

export const tasksetNameSchema: Schema<TasksetName> = s.of<TasksetName>(s.union([s.string()]));
