import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type TaskVersionNumber = number;

export const taskVersionNumberSchema: Schema<TaskVersionNumber> = s.of<TaskVersionNumber>(s.union([s.int()]));
