import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Start time on this day. Omitted keeps the campaign start time. */
export type DailyStartTime1 = string;

export const dailyStartTime1Schema: Schema<DailyStartTime1> = s.of<DailyStartTime1>(s.union([s.string()]));
