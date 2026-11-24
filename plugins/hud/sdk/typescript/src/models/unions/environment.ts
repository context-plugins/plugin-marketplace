import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { taskEnvironmentBriefSchema, type TaskEnvironmentBrief } from "../task-environment-brief.js";

export type Environment = TaskEnvironmentBrief;

export const environmentSchema: Schema<Environment> = s.of<Environment>(
  s.union([s.lazy(() => taskEnvironmentBriefSchema)]),
);
