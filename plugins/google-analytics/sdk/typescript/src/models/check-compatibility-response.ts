import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dimensionCompatibilitySchema, type DimensionCompatibility } from "./dimension-compatibility.js";
import { metricCompatibilitySchema, type MetricCompatibility } from "./metric-compatibility.js";

/** The compatibility response with the compatibility of each dimension & metric. */
export type CheckCompatibilityResponse = {
  /** The compatibility of each metric. */
  metricCompatibilities?: MetricCompatibility[];
  /** The compatibility of each dimension. */
  dimensionCompatibilities?: DimensionCompatibility[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const checkCompatibilityResponseSchema: Schema<CheckCompatibilityResponse> =
  s.object<CheckCompatibilityResponse>(
    {
      metricCompatibilities: s.optional(s.array(s.lazy(() => metricCompatibilitySchema))),
      dimensionCompatibilities: s.optional(s.array(s.lazy(() => dimensionCompatibilitySchema))),
    },
    { additionalProperties: s.json() },
  );
