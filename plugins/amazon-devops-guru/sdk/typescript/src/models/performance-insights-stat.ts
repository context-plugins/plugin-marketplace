import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PerformanceInsightsStat = {
  /** The statistic type. */
  type?: string;
  /** The value of the statistic. */
  value?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const performanceInsightsStatSchema: Schema<PerformanceInsightsStat> =
  s.object<PerformanceInsightsStat>(
    {
      type: s.optional(s.string()),
      value: s.optional(s.float64()),
      _keysMap: {
        type: "Type",
        value: "Value",
      },
    },
    { additionalProperties: s.json() },
  );
