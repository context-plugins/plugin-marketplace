import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { taskBriefSchema, type TaskBrief } from "../task-brief.js";

export type Brief = TaskBrief;

export const briefSchema: Schema<Brief> = s.of<Brief>(s.union([s.lazy(() => taskBriefSchema)]));
