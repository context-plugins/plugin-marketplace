import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AppSummary = {
  numCompletedStages?: number;
  numCompletedJobs?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const appSummarySchema: Schema<AppSummary> = s.object<AppSummary>(
  {
    numCompletedStages: s.optional(s.int()),
    numCompletedJobs: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
