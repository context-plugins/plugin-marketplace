import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RecordMarkerDecisionAttributes = {
  /** The name of the marker. */
  markerName: string;
  /** The details of the marker. */
  details?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recordMarkerDecisionAttributesSchema: Schema<RecordMarkerDecisionAttributes> =
  s.object<RecordMarkerDecisionAttributes>(
    {
      markerName: s.string(),
      details: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
