import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskRunInputInternalSchema, taskRunInputSchema, type TaskRunInput } from "./task-run-input.js";
import { defaultTaskSpecSchema, type DefaultTaskSpec } from "./unions/default-task-spec.js";

/** Request to initiate new task runs in a task group. */
export type TaskGroupRunRequest = {
  /**
   * Default task spec to use for the runs. If task_spec is specified in a run, it overrides this
   * default.
   */
  defaultTaskSpec?: DefaultTaskSpec;
  /**
   * List of task runs to execute. Up to 1,000 runs can be specified per request. If you'd like to
   * add more runs, split them across multiple TaskGroup POST requests.
   */
  inputs: TaskRunInput[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const taskGroupRunRequestProperties: s.Shape<TaskGroupRunRequest> = {
  defaultTaskSpec: s.optional(s.lazy(() => defaultTaskSpecSchema)),
  inputs: s.array(s.lazy(() => taskRunInputInternalSchema)),
  _keysMap: {
    defaultTaskSpec: "default_task_spec",
  },
};

export const taskGroupRunRequestInternalSchema: Schema<TaskGroupRunRequest> = s.object<TaskGroupRunRequest>(
  taskGroupRunRequestProperties,
  { additionalProperties: s.json() },
);

export const taskGroupRunRequestSchema: Schema<TaskGroupRunRequest> = s.lazySchema(() =>
  s.object<TaskGroupRunRequest>(
    {
      ...taskGroupRunRequestProperties,
      inputs: s.array(s.lazy(() => taskRunInputSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
