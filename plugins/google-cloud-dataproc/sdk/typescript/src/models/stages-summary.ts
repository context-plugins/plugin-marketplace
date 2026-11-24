import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Data related to Stages page summary */
export type StagesSummary = {
  numPendingStages?: number;
  numCompletedStages?: number;
  numActiveStages?: number;
  numFailedStages?: number;
  numSkippedStages?: number;
  applicationId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stagesSummarySchema: Schema<StagesSummary> = s.object<StagesSummary>(
  {
    numPendingStages: s.optional(s.int()),
    numCompletedStages: s.optional(s.int()),
    numActiveStages: s.optional(s.int()),
    numFailedStages: s.optional(s.int()),
    numSkippedStages: s.optional(s.int()),
    applicationId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
