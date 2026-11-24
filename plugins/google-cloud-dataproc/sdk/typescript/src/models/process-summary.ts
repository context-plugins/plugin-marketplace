import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Process Summary */
export type ProcessSummary = {
  totalCores?: number;
  hostPort?: string;
  processId?: string;
  isActive?: boolean;
  removeTime?: string;
  addTime?: string;
  processLogs?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const processSummarySchema: Schema<ProcessSummary> = s.object<ProcessSummary>(
  {
    totalCores: s.optional(s.int()),
    hostPort: s.optional(s.string()),
    processId: s.optional(s.string()),
    isActive: s.optional(s.boolean()),
    removeTime: s.optional(s.string()),
    addTime: s.optional(s.string()),
    processLogs: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
