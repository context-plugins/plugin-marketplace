import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status3Schema, type Status3 } from "./status3.js";

/**
 * Output only. The status of the task's first attempt. Only dispatch_time will be set. The other
 * Attempt information is not retained by Cloud Tasks.
 */
export type Attempt3 = {
  /**
   * Output only. The time that this attempt response was received. `response_time` will be
   * truncated to the nearest microsecond.
   */
  responseTime?: string;
  /**
   * Output only. The time that this attempt was scheduled. `schedule_time` will be truncated to the
   * nearest microsecond.
   */
  scheduleTime?: string;
  /**
   * Output only. The response from the worker for this attempt. If `response_time` is unset, then
   * the task has not been attempted or is currently running and the `response_status` field is
   * meaningless.
   */
  responseStatus?: Status3;
  /**
   * Output only. The time that this attempt was dispatched. `dispatch_time` will be truncated to
   * the nearest microsecond.
   */
  dispatchTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const attempt3Schema: Schema<Attempt3> = s.object<Attempt3>(
  {
    responseTime: s.optional(s.string()),
    scheduleTime: s.optional(s.string()),
    responseStatus: s.optional(s.lazy(() => status3Schema)),
    dispatchTime: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
