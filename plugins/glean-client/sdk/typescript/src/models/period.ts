import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { timePointSchema, type TimePoint } from "./time-point.js";

export type Period = {
  /**
   * DEPRECATED - The number of days from now in the past to define upper boundary of time period.
   *
   * @deprecated
   */
  minDaysFromNow?: number;
  /**
   * DEPRECATED - The number of days from now in the past to define lower boundary of time period.
   *
   * @deprecated
   */
  maxDaysFromNow?: number;
  start?: TimePoint;
  end?: TimePoint;
};

export const periodSchema: Schema<Period> = s.object<Period>({
  minDaysFromNow: s.optional(s.int()),
  maxDaysFromNow: s.optional(s.int()),
  start: s.optional(s.lazy(() => timePointSchema)),
  end: s.optional(s.lazy(() => timePointSchema)),
});
