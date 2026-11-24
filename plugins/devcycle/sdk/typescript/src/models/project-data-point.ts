import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProjectDataPoint = {
  /** Date of this datapoint */
  date: Date;
  /**
   * Number of variable evaluations across the whole project for this data point, grouped by user
   */
  value: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectDataPointSchema: Schema<ProjectDataPoint> = s.object<ProjectDataPoint>(
  {
    date: s.dateTime(),
    value: s.float64(),
  },
  { additionalProperties: s.json() },
);
