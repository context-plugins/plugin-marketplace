import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Details of the speculation task when speculative execution is enabled. */
export type SpeculationStageSummary = {
  numActiveTasks?: number;
  numCompletedTasks?: number;
  stageId?: string;
  numKilledTasks?: number;
  stageAttemptId?: number;
  numTasks?: number;
  numFailedTasks?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const speculationStageSummarySchema: Schema<SpeculationStageSummary> =
  s.object<SpeculationStageSummary>(
    {
      numActiveTasks: s.optional(s.int()),
      numCompletedTasks: s.optional(s.int()),
      stageId: s.optional(s.string()),
      numKilledTasks: s.optional(s.int()),
      stageAttemptId: s.optional(s.int()),
      numTasks: s.optional(s.int()),
      numFailedTasks: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
