import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Start time of campaign each day */
export type DailyStartTime = string;

export const dailyStartTimeSchema: Schema<DailyStartTime> = s.of<DailyStartTime>(s.union([s.string()]));
