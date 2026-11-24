import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { compatibilitySchema, type Compatibility } from "./compatibility.js";
import { metricMetadata1Schema, type MetricMetadata1 } from "./metric-metadata1.js";

/** The compatibility for a single metric. */
export type MetricCompatibility = {
  /**
   * The compatibility of this metric. If the compatibility is COMPATIBLE, this metric can be
   * successfully added to the report.
   */
  compatibility?: Compatibility;
  /**
   * The metric metadata contains the API name for this compatibility information. The metric
   * metadata also contains other helpful information like the UI name and description.
   */
  metricMetadata?: MetricMetadata1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metricCompatibilitySchema: Schema<MetricCompatibility> = s.object<MetricCompatibility>(
  {
    compatibility: s.optional(s.lazy(() => compatibilitySchema)),
    metricMetadata: s.optional(s.lazy(() => metricMetadata1Schema)),
  },
  { additionalProperties: s.json() },
);
