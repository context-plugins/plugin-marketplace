import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type TasksetId1 = string;

export const tasksetId1Schema: Schema<TasksetId1> = s.of<TasksetId1>(s.union([s.string()]));
