import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ScheduledJob = {
  id?: string;
  /** The job category */
  category?: string;
  /** The job status */
  status?: string;
  /** The job description */
  description?: string;
  /** Error message if the job failed */
  errorMessage?: string;
  startDateTime?: Date;
  endDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scheduledJobSchema: Schema<ScheduledJob> = s.object<ScheduledJob>(
  {
    id: s.optional(s.string()),
    category: s.optional(s.string()),
    status: s.optional(s.string()),
    description: s.optional(s.string()),
    errorMessage: s.optional(s.string()),
    startDateTime: s.optional(s.dateTime()),
    endDateTime: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
