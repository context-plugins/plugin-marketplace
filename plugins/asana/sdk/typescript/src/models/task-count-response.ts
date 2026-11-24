import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A response object returned from the task count endpoint. */
export type TaskCountResponse = {
  /** The number of tasks in a project. */
  numTasks?: number;
  /** The number of incomplete tasks in a project. */
  numIncompleteTasks?: number;
  /** The number of completed tasks in a project. */
  numCompletedTasks?: number;
  /** The number of milestones in a project. */
  numMilestones?: number;
  /** The number of incomplete milestones in a project. */
  numIncompleteMilestones?: number;
  /** The number of completed milestones in a project. */
  numCompletedMilestones?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskCountResponseSchema: Schema<TaskCountResponse> = s.object<TaskCountResponse>(
  {
    numTasks: s.optional(s.int()),
    numIncompleteTasks: s.optional(s.int()),
    numCompletedTasks: s.optional(s.int()),
    numMilestones: s.optional(s.int()),
    numIncompleteMilestones: s.optional(s.int()),
    numCompletedMilestones: s.optional(s.int()),
    _keysMap: {
      numTasks: "num_tasks",
      numIncompleteTasks: "num_incomplete_tasks",
      numCompletedTasks: "num_completed_tasks",
      numMilestones: "num_milestones",
      numIncompleteMilestones: "num_incomplete_milestones",
      numCompletedMilestones: "num_completed_milestones",
    },
  },
  { additionalProperties: s.json() },
);
