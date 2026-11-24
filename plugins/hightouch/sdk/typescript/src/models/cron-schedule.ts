import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CronSchedule = {
  expression: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cronScheduleSchema: Schema<CronSchedule> = s.object<CronSchedule>(
  {
    expression: s.string(),
  },
  { additionalProperties: s.json() },
);
