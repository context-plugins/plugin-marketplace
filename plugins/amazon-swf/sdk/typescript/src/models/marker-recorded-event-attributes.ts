import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MarkerRecordedEventAttributes = {
  /** The name of the marker. */
  markerName: string;
  /** The details of the marker. */
  details?: string;
  /**
   * The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in
   * the RecordMarker decision that requested this marker. This information can be useful for
   * diagnosing problems by tracing back the chain of events leading up to this event.
   */
  decisionTaskCompletedEventId: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const markerRecordedEventAttributesSchema: Schema<MarkerRecordedEventAttributes> =
  s.object<MarkerRecordedEventAttributes>(
    {
      markerName: s.string(),
      details: s.optional(s.string()),
      decisionTaskCompletedEventId: s.int(),
    },
    { additionalProperties: s.json() },
  );
