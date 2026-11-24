import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status3Schema, type Status3 } from "./status3.js";

/** The status of a task attempt. */
export type Attempt = {
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

export const attemptSchema: Schema<Attempt> = s.object<Attempt>(
  {
    responseTime: s.optional(s.string()),
    scheduleTime: s.optional(s.string()),
    responseStatus: s.optional(s.lazy(() => status3Schema)),
    dispatchTime: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
