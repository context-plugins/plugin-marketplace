import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ScheduledConfig1 = {
  intervalMinutes?: number;
  /** @default "UTC" */
  timezone?: string;
  /** Epoch milliseconds */
  startTime?: number;
};

export const scheduledConfig1Schema: Schema<ScheduledConfig1> = s.object<ScheduledConfig1>({
  intervalMinutes: s.optional(s.int()),
  timezone: s.defaulted(s.string(), "UTC"),
  startTime: s.optional(s.int()),
});
