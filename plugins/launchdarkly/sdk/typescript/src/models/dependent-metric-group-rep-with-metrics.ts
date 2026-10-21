import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { kind2Schema, type Kind2 } from "./kind2.js";
import { linkSchema, type Link } from "./link.js";
import { metricInGroupRepSchema, type MetricInGroupRep } from "./metric-in-group-rep.js";

export type DependentMetricGroupRepWithMetrics = {
  /** A unique key to reference the metric group */
  key: string;
  /** A human-friendly name for the metric group */
  name: string;
  /** The type of the metric group */
  kind: Kind2;
  /** The location and content type of related resources */
  links: Record<string, Link>;
  /** The metrics in the metric group */
  metrics?: MetricInGroupRep[];
};

export const dependentMetricGroupRepWithMetricsSchema: Schema<DependentMetricGroupRepWithMetrics> =
  s.object<DependentMetricGroupRepWithMetrics>({
    key: s.string(),
    name: s.string(),
    kind: kind2Schema,
    links: s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
    metrics: s.optional(s.array(s.lazy(() => metricInGroupRepSchema))),
    _keysMap: {
      links: "_links",
    },
  });
