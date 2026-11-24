import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BaselineMetric = {
  /** The name of the metric. */
  name?: string;
  /** The value for the metric. */
  value?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const baselineMetricSchema: Schema<BaselineMetric> = s.object<BaselineMetric>(
  {
    name: s.optional(s.string()),
    value: s.optional(s.float64()),
    _keysMap: {
      name: "Name",
      value: "Value",
    },
  },
  { additionalProperties: s.json() },
);
