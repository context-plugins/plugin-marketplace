import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Serialized error object that describes why a job entered its current <code>state</code>. Includes
 * <code>message</code> and may include a nested <code>reason</code> for wrapped errors.
 */
export type TaskErrorInfo = {
  /** Human-readable error message. */
  message: string;
  /** Error name, if available. */
  name?: string;
  /** Truncated stack trace of the error. */
  stack?: string;
};

export const taskErrorInfoSchema: Schema<TaskErrorInfo> = s.object<TaskErrorInfo>({
  message: s.string(),
  name: s.optional(s.string()),
  stack: s.optional(s.string()),
});
