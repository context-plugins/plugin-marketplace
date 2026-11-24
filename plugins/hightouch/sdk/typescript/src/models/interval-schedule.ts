import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { intervalSchema, type Interval } from "./interval.js";

export type IntervalSchedule = {
  interval: Interval;
};

export const intervalScheduleSchema: Schema<IntervalSchedule> = s.object<IntervalSchedule>({
  interval: intervalSchema,
});
