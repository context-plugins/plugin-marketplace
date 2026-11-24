import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { taskSpecSchema, type TaskSpec } from "../task-spec.js";

/** Task specification. If unspecified, defaults to auto output schema. */
export type TaskSpec1 = TaskSpec;

export const taskSpec1Schema: Schema<TaskSpec1> = s.of<TaskSpec1>(s.union([s.lazy(() => taskSpecSchema)]));
