import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventFilterSchema, type EventFilter } from "./event-filter.js";
import { kind14Schema, type Kind14 } from "./kind14.js";
import { metricDataSourceRefRepSchema, type MetricDataSourceRefRep } from "./metric-data-source-ref-rep.js";
import { metricEventDefaultRepSchema, type MetricEventDefaultRep } from "./metric-event-default-rep.js";
import { successCriteria1Schema, type SuccessCriteria1 } from "./success-criteria1.js";
import { unitAggregationType2Schema, type UnitAggregationType2 } from "./unit-aggregation-type2.js";
import { urlPostSchema, type UrlPost } from "./url-post.js";

export type MetricPost = {
  /** A unique key to reference the metric */
  key: string;
  /** A human-friendly name for the metric */
  name?: string;
  /** Description of the metric */
  description?: string;
  /** The kind of event your metric will track */
  kind: Kind14;
  /** One or more CSS selectors. Required for click metrics only. */
  selector?: string;
  /** One or more target URLs. Required for click and pageview metrics only. */
  urls?: UrlPost[];
  /**
   * Whether to track numeric changes in value against a baseline (<code>true</code>) or to track a
   * conversion when an end user takes an action (<code>false</code>). Required for custom metrics
   * only.
   */
  isNumeric?: boolean;
  /** The unit of measure. Applicable for numeric custom metrics only. */
  unit?: string;
  /**
   * The event key to use in your code. Required for custom conversion/binary and custom numeric
   * metrics only.
   */
  eventKey?: string;
  /**
   * Success criteria. Required for custom numeric metrics, optional for custom conversion metrics.
   */
  successCriteria?: SuccessCriteria1;
  /** Tags for the metric */
  tags?: string[];
  /** An array of randomization units allowed for this metric */
  randomizationUnits?: string[];
  /** The ID of the member who maintains this metric */
  maintainerId?: string;
  /** The method by which multiple unit event values are aggregated */
  unitAggregationType?: UnitAggregationType2;
  /** The method for analyzing metric events */
  analysisType?: string;
  /**
   * The percentile for the analysis method. An integer denoting the target percentile between 0 and
   * 100. Required when <code>analysisType</code> is <code>percentile</code>.
   */
  percentileValue?: number;
  eventDefault?: MetricEventDefaultRep;
  dataSource?: MetricDataSourceRefRep;
  filters?: EventFilter;
};

export const metricPostSchema: Schema<MetricPost> = s.object<MetricPost>({
  key: s.string(),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  kind: kind14Schema,
  selector: s.optional(s.string()),
  urls: s.optional(s.array(s.lazy(() => urlPostSchema))),
  isNumeric: s.optional(s.boolean()),
  unit: s.optional(s.string()),
  eventKey: s.optional(s.string()),
  successCriteria: s.optional(s.lazy(() => successCriteria1Schema)),
  tags: s.optional(s.array(s.string())),
  randomizationUnits: s.optional(s.array(s.string())),
  maintainerId: s.optional(s.string()),
  unitAggregationType: s.optional(s.lazy(() => unitAggregationType2Schema)),
  analysisType: s.optional(s.string()),
  percentileValue: s.optional(s.int()),
  eventDefault: s.optional(s.lazy(() => metricEventDefaultRepSchema)),
  dataSource: s.optional(s.lazy(() => metricDataSourceRefRepSchema)),
  filters: s.optional(s.lazy(() => eventFilterSchema)),
});
