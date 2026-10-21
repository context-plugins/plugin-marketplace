import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { stateSchema, type State } from "./state.js";
import { taskErrorDetail2Schema, type TaskErrorDetail2 } from "./task-error-detail2.js";

/** Status of a job, including its current state and failure reason. */
export type JobStatus = {
  /**
   * Reason the job entered its current <code>state</code>, typically populated upon failure. May
   * include a nested <code>reason</code> for wrapped errors.
   */
  reason?: TaskErrorDetail2;
  /** State of the Job */
  state: State;
};

export const jobStatusSchema: Schema<JobStatus> = s.object<JobStatus>({
  reason: s.optional(s.lazy(() => taskErrorDetail2Schema)),
  state: stateSchema,
});
