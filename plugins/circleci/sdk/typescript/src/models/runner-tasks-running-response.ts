import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RunnerTasksRunningResponse = {
  /** Number of running tasks for the resource class */
  runningRunnerTasks?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runnerTasksRunningResponseSchema: Schema<RunnerTasksRunningResponse> =
  s.object<RunnerTasksRunningResponse>(
    {
      runningRunnerTasks: s.optional(s.int()),
      _keysMap: {
        runningRunnerTasks: "running_runner_tasks",
      },
    },
    { additionalProperties: s.json() },
  );
