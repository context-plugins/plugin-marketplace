import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PerformanceInsightsReferenceScalar = {
  /** The reference value. */
  value?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const performanceInsightsReferenceScalarSchema: Schema<PerformanceInsightsReferenceScalar> =
  s.object<PerformanceInsightsReferenceScalar>(
    {
      value: s.optional(s.float64()),
      _keysMap: {
        value: "Value",
      },
    },
    { additionalProperties: s.json() },
  );
