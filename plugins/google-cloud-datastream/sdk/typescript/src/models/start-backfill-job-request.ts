import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventFilter1Schema, type EventFilter1 } from "./event-filter1.js";

/** Request for manually initiating a backfill job for a specific stream object. */
export type StartBackfillJobRequest = {
  /**
   * Optional. Optional event filter. If not set, or empty, the backfill will be performed on the
   * entire object. This is currently used for partial backfill and only supported for SQL sources.
   */
  eventFilter?: EventFilter1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startBackfillJobRequestSchema: Schema<StartBackfillJobRequest> =
  s.object<StartBackfillJobRequest>(
    {
      eventFilter: s.optional(s.lazy(() => eventFilter1Schema)),
    },
    { additionalProperties: s.json() },
  );
