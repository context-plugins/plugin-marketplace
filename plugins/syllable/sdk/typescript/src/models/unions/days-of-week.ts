import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { dayOfWeekSchema, type DayOfWeek } from "../day-of-week.js";

/** The days of the week for the rule */
export type DaysOfWeek = DayOfWeek[];

export const daysOfWeekSchema: Schema<DaysOfWeek> = s.of<DaysOfWeek>(
  s.union([s.array(s.lazy(() => dayOfWeekSchema))]),
);
