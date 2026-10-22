import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** End time of campaign each day */
export type DailyEndTime = string;

export const dailyEndTimeSchema: Schema<DailyEndTime> = s.of<DailyEndTime>(s.union([s.string()]));
