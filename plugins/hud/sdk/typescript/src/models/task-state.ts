import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Canonical task workflow state.
 *
 * Lives in the kernel so both the DB layer (orm.py pg enum) and the decision core (tasks.state)
 * depend downward on it.
 */
export const TaskState = {
  Draft: "draft",
  Pending: "pending",
  Ready: "ready",
  Verified: "verified",
  Revision: "revision",
  Rejected: "rejected",
} as const;
export type TaskState = (typeof TaskState)[keyof typeof TaskState] | (string & {});

export const taskStateSchema: EnumSchema<TaskState> = s.enumOf<TaskState>(TaskState);
