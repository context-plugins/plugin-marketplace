import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { taskErrorInfo2Schema, type TaskErrorInfo2 } from "./task-error-info2.js";

/**
 * Reason the job entered its current <code>state</code>, typically populated upon failure. May
 * include a nested <code>reason</code> for wrapped errors.
 */
export type TaskErrorDetail2 = {
  /** Human-readable error message. */
  message: string;
  /** Error name, if available. */
  name?: string;
  /** Nested cause of the error, if any. */
  reason?: TaskErrorInfo2;
  /** Truncated stack trace of the error. */
  stack?: string;
};

export const taskErrorDetail2Schema: Schema<TaskErrorDetail2> = s.object<TaskErrorDetail2>({
  message: s.string(),
  name: s.optional(s.string()),
  reason: s.optional(s.lazy(() => taskErrorInfo2Schema)),
  stack: s.optional(s.string()),
});
