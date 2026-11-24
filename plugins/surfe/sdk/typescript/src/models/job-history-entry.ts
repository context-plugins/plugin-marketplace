import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type JobHistoryEntry = {
  companyName?: string;
  companyDomain?: string;
  jobTitle?: string;
  startDate?: string;
  endDate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobHistoryEntrySchema: Schema<JobHistoryEntry> = s.object<JobHistoryEntry>(
  {
    companyName: s.optional(s.string()),
    companyDomain: s.optional(s.string()),
    jobTitle: s.optional(s.string()),
    startDate: s.optional(s.string()),
    endDate: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
