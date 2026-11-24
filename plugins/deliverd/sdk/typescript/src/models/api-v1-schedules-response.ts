import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scheduleSchema, type Schedule } from "./schedule.js";

export type ApiV1SchedulesResponse = {
  schedules: Schedule[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1SchedulesResponseSchema: Schema<ApiV1SchedulesResponse> = s.object<ApiV1SchedulesResponse>(
  {
    schedules: s.array(s.lazy(() => scheduleSchema)),
  },
  { additionalProperties: s.json() },
);
