import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * If the execution status is closed then this specifies how the execution was closed: COMPLETED –
 * the execution was successfully completed. CANCELED – the execution was canceled.Cancellation
 * allows the implementation to gracefully clean up before the execution is closed. TERMINATED – the
 * execution was force terminated. FAILED – the execution failed to complete. TIMED_OUT – the
 * execution did not complete in the alloted time and was automatically timed out. CONTINUED_AS_NEW
 * – the execution is logically continued. This means the current execution was completed and a new
 * execution was started to car
 */
export const CloseStatus = {
  Completed: "COMPLETED",
  Failed: "FAILED",
  Canceled: "CANCELED",
  Terminated: "TERMINATED",
  ContinuedAsNew: "CONTINUED_AS_NEW",
  TimedOut: "TIMED_OUT",
} as const;
export type CloseStatus = (typeof CloseStatus)[keyof typeof CloseStatus] | (string & {});

export const closeStatusSchema: EnumSchema<CloseStatus> = s.enumOf<CloseStatus>(CloseStatus);
