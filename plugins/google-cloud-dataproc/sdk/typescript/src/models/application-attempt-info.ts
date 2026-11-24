import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Specific attempt of an application. */
export type ApplicationAttemptInfo = {
  durationMillis?: string;
  attemptId?: string;
  lastUpdated?: string;
  completed?: boolean;
  appSparkVersion?: string;
  startTime?: string;
  sparkUser?: string;
  /** Output only. The event log path for the application attempt. */
  eventLogPath?: string;
  endTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const applicationAttemptInfoSchema: Schema<ApplicationAttemptInfo> = s.object<ApplicationAttemptInfo>(
  {
    durationMillis: s.optional(s.string()),
    attemptId: s.optional(s.string()),
    lastUpdated: s.optional(s.string()),
    completed: s.optional(s.boolean()),
    appSparkVersion: s.optional(s.string()),
    startTime: s.optional(s.string()),
    sparkUser: s.optional(s.string()),
    eventLogPath: s.optional(s.string()),
    endTime: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
