import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { externalMetricSchema, type ExternalMetric } from "./external-metric.js";
import { sortSchema, type Sort } from "./sort.js";

/**
 * To limit the number of results based on ranking. See [Limit by
 * rank](https://help.doit.com/docs/cloud-analytics/reports/editing-your-cloud-report#limit-by-topbottom).
 */
export type Limit = {
  /** Metric selector used in reports and filters. */
  metric: ExternalMetric;
  /** Sort order for ranking results. */
  sort?: Sort;
  /** The number of items to show */
  value?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const limitSchema: Schema<Limit> = s.object<Limit>(
  {
    metric: externalMetricSchema,
    sort: s.optional(s.lazy(() => sortSchema)),
    value: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
