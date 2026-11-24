import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StateOperatorProgress = {
  numRowsRemoved?: string;
  numShufflePartitions?: string;
  numRowsTotal?: string;
  commitTimeMs?: string;
  numStateStoreInstances?: string;
  operatorName?: string;
  numRowsDroppedByWatermark?: string;
  numRowsUpdated?: string;
  memoryUsedBytes?: string;
  customMetrics?: Record<string, string>;
  allUpdatesTimeMs?: string;
  allRemovalsTimeMs?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stateOperatorProgressSchema: Schema<StateOperatorProgress> = s.object<StateOperatorProgress>(
  {
    numRowsRemoved: s.optional(s.string()),
    numShufflePartitions: s.optional(s.string()),
    numRowsTotal: s.optional(s.string()),
    commitTimeMs: s.optional(s.string()),
    numStateStoreInstances: s.optional(s.string()),
    operatorName: s.optional(s.string()),
    numRowsDroppedByWatermark: s.optional(s.string()),
    numRowsUpdated: s.optional(s.string()),
    memoryUsedBytes: s.optional(s.string()),
    customMetrics: s.optional(s.record(s.string(), s.string())),
    allUpdatesTimeMs: s.optional(s.string()),
    allRemovalsTimeMs: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
