import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InsightPeriod = {
  startTime: number;
  endTime: number;
};

export const insightPeriodSchema: Schema<InsightPeriod> = s.object<InsightPeriod>({
  startTime: s.int(),
  endTime: s.int(),
});
