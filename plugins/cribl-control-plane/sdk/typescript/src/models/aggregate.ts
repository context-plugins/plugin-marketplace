import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metricTypeSchema, type MetricType } from "./metric-type.js";

export type Aggregate = {
  /** The output metric type */
  metricType: MetricType;
  /**
   * Aggregate function to perform on events. Example:
   * sum(bytes).where(action=='REJECT').as(TotalBytes)
   */
  agg: string;
};

export const aggregateSchema: Schema<Aggregate> = s.object<Aggregate>({
  metricType: metricTypeSchema,
  agg: s.string(),
});
