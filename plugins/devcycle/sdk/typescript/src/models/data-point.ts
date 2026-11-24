import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DataPoint = {
  /** Date of this data point */
  date: Date;
  /** Mapping of variation (variation1, variation2 etc.) to result value in that variation */
  values: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataPointSchema: Schema<DataPoint> = s.object<DataPoint>(
  {
    date: s.dateTime(),
    values: s.record(s.string(), s.unknown()),
  },
  { additionalProperties: s.json() },
);
