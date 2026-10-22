import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metricType1Schema, type MetricType1 } from "./metric-type1.js";

export type AddMetric = {
  /** The name of the field in the event that contains the metric value */
  inFieldName: string;
  /** JavaScript expression to evaluate the metric field name. Defaults to Event Field Name. */
  outFieldExpr?: string;
  /** The type of metric to publish (counter, timer, gauge, distribution, summary, or histogram). */
  metricType: MetricType1;
};

export const addMetricSchema: Schema<AddMetric> = s.object<AddMetric>({
  inFieldName: s.string(),
  outFieldExpr: s.optional(s.string()),
  metricType: metricType1Schema,
});
