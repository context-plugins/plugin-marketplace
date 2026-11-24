import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { eventFilter3Schema, type EventFilter3 } from "./event-filter3.js";
import { stateSchema, type State } from "./state.js";
import { triggerSchema, type Trigger } from "./trigger.js";

/** Represents a backfill job on a specific stream object. */
export type BackfillJob = {
  /** Output only. Backfill job's start time. */
  lastStartTime?: string;
  /** Output only. Backfill job state. */
  state?: State;
  /** Backfill job's triggering reason. */
  trigger?: Trigger;
  /** Output only. Errors which caused the backfill job to fail. */
  errors?: Error[];
  /** Output only. Backfill job's end time. */
  lastEndTime?: string;
  /** Output only. The filter for performing a partial backfill. */
  eventFilter?: EventFilter3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const backfillJobSchema: Schema<BackfillJob> = s.object<BackfillJob>(
  {
    lastStartTime: s.optional(s.string()),
    state: s.optional(s.lazy(() => stateSchema)),
    trigger: s.optional(s.lazy(() => triggerSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    lastEndTime: s.optional(s.string()),
    eventFilter: s.optional(s.lazy(() => eventFilter3Schema)),
  },
  { additionalProperties: s.json() },
);
