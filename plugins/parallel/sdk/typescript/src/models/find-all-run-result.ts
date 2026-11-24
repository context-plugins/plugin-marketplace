import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { findAllCandidateSchema, type FindAllCandidate } from "./find-all-candidate.js";
import { findAllRun1Schema, type FindAllRun1 } from "./find-all-run1.js";
import { lastEventIdSchema, type LastEventId } from "./unions/last-event-id.js";

/**
 * Complete FindAll search results.
 *
 * Represents a snapshot of a FindAll run, including run metadata and a list of candidate entities
 * with their match status and details at the time the snapshot was taken.
 */
export type FindAllRunResult = {
  /** FindAll run object. */
  run: FindAllRun1;
  /** All evaluated candidates at the time of the snapshot. */
  candidates: FindAllCandidate[];
  /**
   * ID of the last event of the run at the time of the request. This can be used to resume
   * streaming from the last event.
   */
  lastEventId?: LastEventId;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const findAllRunResultSchema: Schema<FindAllRunResult> = s.object<FindAllRunResult>(
  {
    run: findAllRun1Schema,
    candidates: s.array(s.lazy(() => findAllCandidateSchema)),
    lastEventId: s.optional(s.lazy(() => lastEventIdSchema)),
    _keysMap: {
      lastEventId: "last_event_id",
    },
  },
  { additionalProperties: s.json() },
);
