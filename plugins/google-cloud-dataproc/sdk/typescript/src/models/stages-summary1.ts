import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Summary of a Spark Application Stages */
export type StagesSummary1 = {
  numPendingStages?: number;
  numCompletedStages?: number;
  numActiveStages?: number;
  numFailedStages?: number;
  numSkippedStages?: number;
  applicationId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stagesSummary1Schema: Schema<StagesSummary1> = s.object<StagesSummary1>(
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
