import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TimePoint = {
  /** Epoch seconds. Has precedence over daysFromNow. */
  epochSeconds?: number;
  /** Number of days in the past, relative to the current date. */
  daysFromNow?: number;
};

export const timePointSchema: Schema<TimePoint> = s.object<TimePoint>({
  epochSeconds: s.optional(s.int()),
  daysFromNow: s.optional(s.int()),
});
