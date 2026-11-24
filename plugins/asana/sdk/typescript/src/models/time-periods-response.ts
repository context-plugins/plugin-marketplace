import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { timePeriodResponseSchema, type TimePeriodResponse } from "./time-period-response.js";

export type TimePeriodsResponse = {
  data?: TimePeriodResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const timePeriodsResponseSchema: Schema<TimePeriodsResponse> = s.object<TimePeriodsResponse>(
  {
    data: s.optional(s.lazy(() => timePeriodResponseSchema)),
  },
  { additionalProperties: s.json() },
);
