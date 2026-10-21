import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ScheduledConfig = {
  intervalMinutes?: number;
  cronExpression?: string;
  timezone?: string;
  startTime?: number;
  nextTime?: number;
  endTime?: number;
  maxRepetitions?: number;
  repetitionCount?: number;
};

export const scheduledConfigSchema: Schema<ScheduledConfig> = s.object<ScheduledConfig>({
  intervalMinutes: s.optional(s.int()),
  cronExpression: s.optional(s.string()),
  timezone: s.optional(s.string()),
  startTime: s.optional(s.int()),
  nextTime: s.optional(s.int()),
  endTime: s.optional(s.int()),
  maxRepetitions: s.optional(s.int()),
  repetitionCount: s.optional(s.int()),
});
