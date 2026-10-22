import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addMetricSchema, type AddMetric } from "./add-metric.js";

/** Configuration specific to the Pipeline Function. */
export type FunctionConfSchemaPublishMetrics1 = {
  /**
   * List of metrics from event to extract and format. Formatted metrics can be used by a
   * destination to pass metrics to a metrics aggregation platform.
   */
  fields?: AddMetric[];
  /** Overwrite previous metric specs. Leave disabled to append. */
  overwrite?: boolean;
  /**
   * Optional list of dimensions to include in events. Wildcards supported. If you don't specify
   * metrics, values will be appended to every metric found in the event. When you add a new metric,
   * dimensions will be present only in those new metrics.
   */
  dimensions?: string[];
  /**
   * Optional list of metric field names to look for when removing metrics. When a metric's field
   * name matches an element in this list, the metric will be removed from the event.
   */
  removeMetrics?: string[];
  /**
   * Optional list of dimensions to remove from every metric found in the event. Wildcards
   * supported.
   */
  removeDimensions?: string[];
};

export const functionConfSchemaPublishMetrics1Schema: Schema<FunctionConfSchemaPublishMetrics1> =
  s.object<FunctionConfSchemaPublishMetrics1>({
    fields: s.optional(s.array(s.lazy(() => addMetricSchema))),
    overwrite: s.optional(s.boolean()),
    dimensions: s.optional(s.array(s.string())),
    removeMetrics: s.optional(s.array(s.string())),
    removeDimensions: s.optional(s.array(s.string())),
  });
