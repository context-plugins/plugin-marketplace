import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { kind4Schema, type Kind4 } from "./kind4.js";
import { linkSchema, type Link } from "./link.js";
import { unitAggregationTypeSchema, type UnitAggregationType } from "./unit-aggregation-type.js";

export type MetricInGroupRep = {
  /** The metric key */
  key: string;
  /** The version ID of the metric */
  versionId?: string;
  /** The metric name */
  name: string;
  /** The kind of event the metric tracks */
  kind: Kind4;
  /**
   * For custom metrics, whether to track numeric changes in value against a baseline
   * (<code>true</code>) or to track a conversion when an end user takes an action
   * (<code>false</code>).
   */
  isNumeric?: boolean;
  /** The type of unit aggregation to use for the metric */
  unitAggregationType?: UnitAggregationType;
  /** The event key sent with the metric. Only relevant for custom metrics. */
  eventKey?: string;
  /** The location and content type of related resources */
  links: Record<string, Link>;
  /**
   * Name of the metric when used within the associated metric group. Can be different from the
   * original name of the metric. Required if and only if the metric group is a <code>funnel</code>.
   */
  nameInGroup?: string;
  /** The randomization units for the metric */
  randomizationUnits?: string[];
};

export const metricInGroupRepSchema: Schema<MetricInGroupRep> = s.object<MetricInGroupRep>({
  key: s.string(),
  versionId: s.optional(s.string()),
  name: s.string(),
  kind: kind4Schema,
  isNumeric: s.optional(s.boolean()),
  unitAggregationType: s.optional(s.lazy(() => unitAggregationTypeSchema)),
  eventKey: s.optional(s.string()),
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  nameInGroup: s.optional(s.string()),
  randomizationUnits: s.optional(s.array(s.string())),
  _keysMap: {
    versionId: "_versionId",
    links: "_links",
  },
});
