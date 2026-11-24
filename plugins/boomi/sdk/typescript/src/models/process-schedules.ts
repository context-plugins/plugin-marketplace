import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schedule configuration for an integration process. */
export type ProcessSchedules = {
  /** Unique identifier of the process schedule. */
  id?: string;
  /** ID of the Atom on which this schedule runs. */
  atomId?: string;
  /** ID of the process this schedule applies to. */
  processId?: string;
  /** Scheduling parameters including frequency and timing. */
  schedule?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const processSchedulesSchema: Schema<ProcessSchedules> = s.object<ProcessSchedules>(
  {
    id: s.optional(s.string()),
    atomId: s.optional(s.string()),
    processId: s.optional(s.string()),
    schedule: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
