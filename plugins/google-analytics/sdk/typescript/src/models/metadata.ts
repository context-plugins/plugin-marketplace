import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { comparisonMetadataSchema, type ComparisonMetadata } from "./comparison-metadata.js";
import { dimensionMetadataSchema, type DimensionMetadata } from "./dimension-metadata.js";
import { metricMetadataSchema, type MetricMetadata } from "./metric-metadata.js";

/** The dimensions, metrics and comparisons currently accepted in reporting methods. */
export type Metadata = {
  /** The metric descriptions. */
  metrics?: MetricMetadata[];
  /** The dimension descriptions. */
  dimensions?: DimensionMetadata[];
  /** Resource name of this metadata. */
  name?: string;
  /** The comparison descriptions. */
  comparisons?: ComparisonMetadata[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metadataSchema: Schema<Metadata> = s.object<Metadata>(
  {
    metrics: s.optional(s.array(s.lazy(() => metricMetadataSchema))),
    dimensions: s.optional(s.array(s.lazy(() => dimensionMetadataSchema))),
    name: s.optional(s.string()),
    comparisons: s.optional(s.array(s.lazy(() => comparisonMetadataSchema))),
  },
  { additionalProperties: s.json() },
);
