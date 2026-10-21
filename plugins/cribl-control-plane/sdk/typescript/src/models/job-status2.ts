import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { stateSchema, type State } from "./state.js";
import { taskErrorDetail2Schema, type TaskErrorDetail2 } from "./task-error-detail2.js";

/** Status of the job. */
export type JobStatus2 = {
  /**
   * Reason the job entered its current <code>state</code>, typically populated upon failure. May
   * include a nested <code>reason</code> for wrapped errors.
   */
  reason?: TaskErrorDetail2;
  /** State of the Job */
  state: State;
};

export const jobStatus2Schema: Schema<JobStatus2> = s.object<JobStatus2>({
  reason: s.optional(s.lazy(() => taskErrorDetail2Schema)),
  state: stateSchema,
});
