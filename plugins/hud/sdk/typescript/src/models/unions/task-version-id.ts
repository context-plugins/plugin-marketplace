import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type TaskVersionId = string;

export const taskVersionIdSchema: Schema<TaskVersionId> = s.of<TaskVersionId>(s.union([s.string()]));
