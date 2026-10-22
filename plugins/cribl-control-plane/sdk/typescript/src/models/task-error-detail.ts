import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { taskErrorInfo2Schema, type TaskErrorInfo2 } from "./task-error-info2.js";

/**
 * Task error details. May include a nested <code>reason</code> for wrapped errors and additional
 * properties from the original error.
 */
export type TaskErrorDetail = {
  /** Human-readable error message. */
  message: string;
  /** Error name, if available. */
  name?: string;
  /** Nested cause of the error, if any. */
  reason?: TaskErrorInfo2;
  /** Truncated stack trace of the error. */
  stack?: string;
};

export const taskErrorDetailSchema: Schema<TaskErrorDetail> = s.object<TaskErrorDetail>({
  message: s.string(),
  name: s.optional(s.string()),
  reason: s.optional(s.lazy(() => taskErrorInfo2Schema)),
  stack: s.optional(s.string()),
});
