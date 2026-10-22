import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { kind2Schema, type Kind2 } from "./kind2.js";
import {
  metricInMetricGroupInputSchema,
  type MetricInMetricGroupInput,
} from "./metric-in-metric-group-input.js";

export type MetricGroupPost = {
  /** A unique key to reference the metric group */
  key?: string;
  /** A human-friendly name for the metric group */
  name: string;
  /** The type of the metric group */
  kind: Kind2;
  /** Description of the metric group */
  description?: string;
  /** The ID of the member who maintains this metric group */
  maintainerId: string;
  /** Tags for the metric group */
  tags: string[];
  /** An ordered list of the metrics in this metric group */
  metrics: MetricInMetricGroupInput[];
};

export const metricGroupPostSchema: Schema<MetricGroupPost> = s.object<MetricGroupPost>({
  key: s.optional(s.string()),
  name: s.string(),
  kind: kind2Schema,
  description: s.optional(s.string()),
  maintainerId: s.string(),
  tags: s.array(s.string()),
  metrics: s.array(s.lazy(() => metricInMetricGroupInputSchema)),
});
