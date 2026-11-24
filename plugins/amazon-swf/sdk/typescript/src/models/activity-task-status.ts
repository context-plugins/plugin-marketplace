import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ActivityTaskStatus = {
  /** Set to true if cancellation of the task is requested. */
  cancelRequested: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activityTaskStatusSchema: Schema<ActivityTaskStatus> = s.object<ActivityTaskStatus>(
  {
    cancelRequested: s.boolean(),
  },
  { additionalProperties: s.json() },
);
