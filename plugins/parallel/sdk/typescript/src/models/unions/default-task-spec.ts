import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { taskSpecSchema, type TaskSpec } from "../task-spec.js";

/**
 * Default task spec to use for the runs. If task_spec is specified in a run, it overrides this
 * default.
 */
export type DefaultTaskSpec = TaskSpec;

export const defaultTaskSpecSchema: Schema<DefaultTaskSpec> = s.of<DefaultTaskSpec>(
  s.union([s.lazy(() => taskSpecSchema)]),
);
