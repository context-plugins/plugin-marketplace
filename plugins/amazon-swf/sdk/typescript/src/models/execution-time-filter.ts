import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ExecutionTimeFilter = {
  /** Specifies the oldest start or close date and time to return. */
  oldestDate: Date;
  /** Specifies the latest start or close date and time to return. */
  latestDate?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const executionTimeFilterSchema: Schema<ExecutionTimeFilter> = s.object<ExecutionTimeFilter>(
  {
    oldestDate: s.dateTime(),
    latestDate: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
