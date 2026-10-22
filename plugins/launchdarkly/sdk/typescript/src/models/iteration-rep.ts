import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  dependentMetricGroupRepWithMetricsSchema,
  type DependentMetricGroupRepWithMetrics,
} from "./dependent-metric-group-rep-with-metrics.js";
import {
  dependentMetricOrMetricGroupRepSchema,
  type DependentMetricOrMetricGroupRep,
} from "./dependent-metric-or-metric-group-rep.js";
import { flagRepSchema, type FlagRep } from "./flag-rep.js";
import { layerSnapshotRepSchema, type LayerSnapshotRep } from "./layer-snapshot-rep.js";
import { metricV2RepSchema, type MetricV2Rep } from "./metric-v2-rep.js";
import { status2Schema, type Status2 } from "./status2.js";
import { treatmentRepSchema, type TreatmentRep } from "./treatment-rep.js";

export type IterationRep = {
  /** The iteration ID */
  id?: string;
  /** The expected outcome of this experiment */
  hypothesis: string;
  /**
   * The status of the iteration: <code>not_started</code>, <code>running</code>,
   * <code>stopped</code>
   */
  status: Status2;
  createdAt: number;
  startedAt?: number;
  endedAt?: number;
  /** The ID of the treatment chosen when the experiment stopped */
  winningTreatmentId?: string;
  /** The reason you stopped the experiment */
  winningReason?: string;
  /**
   * Whether the experiment may reassign traffic to different variations when the experiment
   * audience changes (true) or must keep all traffic assigned to its initial variation (false).
   */
  canReshuffleTraffic?: boolean;
  /** Details on the flag used in this experiment */
  flags?: Record<string, FlagRep>;
  /**
   * The cadence (in milliseconds) to update the allocation. Only present for multi-armed bandits.
   */
  reallocationFrequencyMillis?: number;
  /** The current version that the iteration is on */
  version?: number;
  primaryMetric?: DependentMetricOrMetricGroupRep;
  primarySingleMetric?: MetricV2Rep;
  primaryFunnel?: DependentMetricGroupRepWithMetrics;
  /** The unit of randomization for this iteration */
  randomizationUnit?: string;
  /** The available attribute filters for this iteration */
  attributes?: string[];
  /** Details on the variations you are testing in the experiment */
  treatments?: TreatmentRep[];
  /**
   * Deprecated, use <code>metrics</code> instead. Details on the secondary metrics for this
   * experiment.
   *
   * @deprecated
   */
  secondaryMetrics?: MetricV2Rep[];
  /** Details on the metrics for this experiment */
  metrics?: DependentMetricOrMetricGroupRep[];
  layerSnapshot?: LayerSnapshotRep;
};

export const iterationRepSchema: Schema<IterationRep> = s.object<IterationRep>({
  id: s.optional(s.string()),
  hypothesis: s.string(),
  status: status2Schema,
  createdAt: s.int(),
  startedAt: s.optional(s.int()),
  endedAt: s.optional(s.int()),
  winningTreatmentId: s.optional(s.string()),
  winningReason: s.optional(s.string()),
  canReshuffleTraffic: s.optional(s.boolean()),
  flags: s.optional(
    s.record(
      s.string(),
      s.lazy(() => flagRepSchema),
    ),
  ),
  reallocationFrequencyMillis: s.optional(s.int()),
  version: s.optional(s.int()),
  primaryMetric: s.optional(s.lazy(() => dependentMetricOrMetricGroupRepSchema)),
  primarySingleMetric: s.optional(s.lazy(() => metricV2RepSchema)),
  primaryFunnel: s.optional(s.lazy(() => dependentMetricGroupRepWithMetricsSchema)),
  randomizationUnit: s.optional(s.string()),
  attributes: s.optional(s.array(s.string())),
  treatments: s.optional(s.array(s.lazy(() => treatmentRepSchema))),
  secondaryMetrics: s.optional(s.array(s.lazy(() => metricV2RepSchema))),
  metrics: s.optional(s.array(s.lazy(() => dependentMetricOrMetricGroupRepSchema))),
  layerSnapshot: s.optional(s.lazy(() => layerSnapshotRepSchema)),
  _keysMap: {
    id: "_id",
  },
});
