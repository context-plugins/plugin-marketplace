import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** End time on this day. Omitted keeps the campaign end time. */
export type DailyEndTime1 = string;

export const dailyEndTime1Schema: Schema<DailyEndTime1> = s.of<DailyEndTime1>(s.union([s.string()]));
