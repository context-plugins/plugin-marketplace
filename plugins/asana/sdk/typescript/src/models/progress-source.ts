import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This field defines how the progress value of a goal metric is being calculated. A goal's progress
 * can be provided manually by the user, calculated automatically from contributing subgoals or
 * projects, or managed by an integration with an external data source, such as Salesforce.
 */
export const ProgressSource = {
  Manual: "manual",
  SubgoalProgress: "subgoal_progress",
  ProjectTaskCompletion: "project_task_completion",
  ProjectMilestoneCompletion: "project_milestone_completion",
  External: "external",
} as const;
export type ProgressSource = (typeof ProgressSource)[keyof typeof ProgressSource] | (string & {});

export const progressSourceSchema: EnumSchema<ProgressSource> = s.enumOf<ProgressSource>(ProgressSource);
