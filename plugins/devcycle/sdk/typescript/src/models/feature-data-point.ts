import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FeatureDataPoint = {
  /**
   * Mapping of evaluation variation (variation1, variation2 etc.) to number of evaluations in that
   * variation
   */
  values: Record<string, unknown>;
  /** Date of this data point */
  date: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const featureDataPointSchema: Schema<FeatureDataPoint> = s.object<FeatureDataPoint>(
  {
    values: s.record(s.string(), s.unknown()),
    date: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
