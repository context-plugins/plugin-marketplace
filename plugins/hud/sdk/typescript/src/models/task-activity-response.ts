import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskActivityEventSchema, type TaskActivityEvent } from "./task-activity-event.js";

export type TaskActivityResponse = {
  events: TaskActivityEvent[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskActivityResponseSchema: Schema<TaskActivityResponse> = s.object<TaskActivityResponse>(
  {
    events: s.array(s.lazy(() => taskActivityEventSchema)),
  },
  { additionalProperties: s.json() },
);
