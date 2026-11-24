import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PredictorEvent = {
  /**
   * The type of event. For example, Retrain. A retraining event denotes the timepoint when a
   * predictor was retrained. Any monitor results from before the Datetime are from the previous
   * predictor. Any new metrics are for the newly retrained predictor.
   */
  detail?: string;
  /** The timestamp for when the event occurred. */
  datetime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const predictorEventSchema: Schema<PredictorEvent> = s.object<PredictorEvent>(
  {
    detail: s.optional(s.string()),
    datetime: s.optional(s.dateTime()),
    _keysMap: {
      detail: "Detail",
      datetime: "Datetime",
    },
  },
  { additionalProperties: s.json() },
);
