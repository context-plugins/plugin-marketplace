import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Nested cause of the error, if any. */
export type TaskErrorInfo2 = {
  /** Human-readable error message. */
  message: string;
  /** Error name, if available. */
  name?: string;
  /** Truncated stack trace of the error. */
  stack?: string;
};

export const taskErrorInfo2Schema: Schema<TaskErrorInfo2> = s.object<TaskErrorInfo2>({
  message: s.string(),
  name: s.optional(s.string()),
  stack: s.optional(s.string()),
});
