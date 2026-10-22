import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessSchema, type Access } from "./access.js";
import { analysisTypeSchema, type AnalysisType } from "./analysis-type.js";
import { filterSchema, type Filter } from "./filter.js";
import { kind4Schema, type Kind4 } from "./kind4.js";
import { linkSchema, type Link } from "./link.js";
import { memberSummarySchema, type MemberSummary } from "./member-summary.js";
import { metricDataSourceRefRepSchema, type MetricDataSourceRefRep } from "./metric-data-source-ref-rep.js";
import { metricEventDefaultRepSchema, type MetricEventDefaultRep } from "./metric-event-default-rep.js";
import { modificationSchema, type Modification } from "./modification.js";
import { successCriteriaSchema, type SuccessCriteria } from "./success-criteria.js";
import { unitAggregationType2Schema, type UnitAggregationType2 } from "./unit-aggregation-type2.js";

export type MetricListingRep = {
  /** The number of experiments using this metric */
  experimentCount?: number;
  /** The number of metric groups using this metric */
  metricGroupCount?: number;
  /** The number of active experiments using this metric */
  activeExperimentCount?: number;
  /** The number of active guarded rollouts using this metric */
  activeGuardedRolloutCount?: number;
  /** The ID of this metric */
  id: string;
  /** The version ID of the metric */
  versionId: string;
  /** Version of the metric */
  version?: number;
  /** A unique key to reference the metric */
  key: string;
  /** A human-friendly name for the metric */
  name: string;
  /** The kind of event the metric tracks */
  kind: Kind4;
  /** The number of feature flags currently attached to this metric */
  attachedFlagCount?: number;
  /** The location and content type of related resources */
  links: Record<string, Link>;
  site?: Link;
  access?: Access;
  /** Tags for the metric */
  tags: string[];
  creationDate: number;
  lastModified?: Modification;
  /** The ID of the member who maintains this metric */
  maintainerId?: string;
  maintainer?: MemberSummary;
  /** Description of the metric */
  description?: string;
  /** The category of the metric */
  category?: string;
  /**
   * For custom metrics, whether to track numeric changes in value against a baseline
   * (<code>true</code>) or to track a conversion when an end user takes an action
   * (<code>false</code>).
   */
  isNumeric?: boolean;
  /** For custom metrics, the success criteria */
  successCriteria?: SuccessCriteria;
  /** For numeric custom metrics, the unit of measure */
  unit?: string;
  /** For custom metrics, the event key to use in your code */
  eventKey?: string;
  /** An array of randomization units allowed for this metric */
  randomizationUnits?: string[];
  filters?: Filter;
  /** The method by which multiple unit event values are aggregated */
  unitAggregationType?: UnitAggregationType2;
  /** The method for analyzing metric events */
  analysisType?: AnalysisType;
  /**
   * The percentile for the analysis method. An integer denoting the target percentile between 0 and
   * 100. Required when <code>analysisType</code> is <code>percentile</code>.
   */
  percentileValue?: number;
  eventDefault?: MetricEventDefaultRep;
  dataSource: MetricDataSourceRefRep;
  lastSeen?: number;
  /** Whether the metric version is archived */
  archived?: boolean;
  archivedAt?: number;
  /** For click metrics, the CSS selectors */
  selector?: string;
  urls?: Record<string, unknown>[];
};

export const metricListingRepSchema: Schema<MetricListingRep> = s.object<MetricListingRep>({
  experimentCount: s.optional(s.int()),
  metricGroupCount: s.optional(s.int()),
  activeExperimentCount: s.optional(s.int()),
  activeGuardedRolloutCount: s.optional(s.int()),
  id: s.string(),
  versionId: s.string(),
  version: s.optional(s.int()),
  key: s.string(),
  name: s.string(),
  kind: kind4Schema,
  attachedFlagCount: s.optional(s.int()),
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  site: s.optional(s.lazy(() => linkSchema)),
  access: s.optional(s.lazy(() => accessSchema)),
  tags: s.array(s.string()),
  creationDate: s.int(),
  lastModified: s.optional(s.lazy(() => modificationSchema)),
  maintainerId: s.optional(s.string()),
  maintainer: s.optional(s.lazy(() => memberSummarySchema)),
  description: s.optional(s.string()),
  category: s.optional(s.string()),
  isNumeric: s.optional(s.boolean()),
  successCriteria: s.optional(s.lazy(() => successCriteriaSchema)),
  unit: s.optional(s.string()),
  eventKey: s.optional(s.string()),
  randomizationUnits: s.optional(s.array(s.string())),
  filters: s.optional(s.lazy(() => filterSchema)),
  unitAggregationType: s.optional(s.lazy(() => unitAggregationType2Schema)),
  analysisType: s.optional(s.lazy(() => analysisTypeSchema)),
  percentileValue: s.optional(s.int()),
  eventDefault: s.optional(s.lazy(() => metricEventDefaultRepSchema)),
  dataSource: metricDataSourceRefRepSchema,
  lastSeen: s.optional(s.int()),
  archived: s.optional(s.boolean()),
  archivedAt: s.optional(s.int()),
  selector: s.optional(s.string()),
  urls: s.optional(s.array(s.record(s.string(), s.unknown()))),
  _keysMap: {
    id: "_id",
    versionId: "_versionId",
    version: "_version",
    attachedFlagCount: "_attachedFlagCount",
    links: "_links",
    site: "_site",
    access: "_access",
    creationDate: "_creationDate",
    maintainer: "_maintainer",
  },
});
