import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { findAllCandidate2Schema, type FindAllCandidate2 } from "./find-all-candidate2.js";
import { type2Schema, type Type2 } from "./type2.js";

/** Event containing a candidate whose match status has changed. */
export type FindAllCandidateMatchStatusEvent = {
  /**
   * Event type; one of findall.candidate.generated, findall.candidate.matched,
   * findall.candidate.unmatched, findall.candidate.discarded, findall.candidate.enriched.
   */
  type: Type2;
  /** Timestamp of the event. */
  timestamp: Date;
  /** Unique event identifier for the event. */
  eventId: string;
  /** The candidate whose match status has been updated. */
  data: FindAllCandidate2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const findAllCandidateMatchStatusEventSchema: Schema<FindAllCandidateMatchStatusEvent> =
  s.object<FindAllCandidateMatchStatusEvent>(
    {
      type: type2Schema,
      timestamp: s.dateTime(),
      eventId: s.string(),
      data: findAllCandidate2Schema,
      _keysMap: {
        eventId: "event_id",
      },
    },
    { additionalProperties: s.json() },
  );
