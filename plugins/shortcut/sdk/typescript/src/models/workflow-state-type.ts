import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WorkflowStateType = {
  Started: "started",
  Backlog: "backlog",
  Unstarted: "unstarted",
  Done: "done",
} as const;
export type WorkflowStateType = (typeof WorkflowStateType)[keyof typeof WorkflowStateType] | (string & {});

export const workflowStateTypeSchema: EnumSchema<WorkflowStateType> =
  s.enumOf<WorkflowStateType>(WorkflowStateType);
