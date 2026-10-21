import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { kind5Schema, type Kind5 } from "./kind5.js";
import { linkSchema, type Link } from "./link.js";
import { metricInGroupRepSchema, type MetricInGroupRep } from "./metric-in-group-rep.js";

export type DependentMetricOrMetricGroupRep = {
  /** A unique key to reference the metric or metric group */
  key: string;
  /** The version ID of the metric or metric group */
  versionId: string;
  /** A human-friendly name for the metric or metric group */
  name: string;
  /**
   * If this is a metric, then it represents the kind of event the metric tracks. If this is a
   * metric group, then it represents the group type
   */
  kind: Kind5;
  /**
   * For custom metrics, whether to track numeric changes in value against a baseline
   * (<code>true</code>) or to track a conversion when an end user takes an action
   * (<code>false</code>).
   */
  isNumeric?: boolean;
  /** The event key sent with the metric. Only relevant for custom metrics. */
  eventKey?: string;
  /** The location and content type of related resources */
  links: Record<string, Link>;
  /** Whether this is a metric group or a metric */
  isGroup: boolean;
  /** An ordered list of the metrics in this metric group */
  metrics?: MetricInGroupRep[];
};

export const dependentMetricOrMetricGroupRepSchema: Schema<DependentMetricOrMetricGroupRep> =
  s.object<DependentMetricOrMetricGroupRep>({
    key: s.string(),
    versionId: s.string(),
    name: s.string(),
    kind: kind5Schema,
    isNumeric: s.optional(s.boolean()),
    eventKey: s.optional(s.string()),
    links: s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
    isGroup: s.boolean(),
    metrics: s.optional(s.array(s.lazy(() => metricInGroupRepSchema))),
    _keysMap: {
      versionId: "_versionId",
      links: "_links",
    },
  });
