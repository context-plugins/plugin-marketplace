import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { flagInputSchema, type FlagInput } from "./flag-input.js";
import { metricInputSchema, type MetricInput } from "./metric-input.js";
import { treatmentInputSchema, type TreatmentInput } from "./treatment-input.js";

export type IterationInput = {
  /** The expected outcome of this experiment */
  hypothesis: string;
  /**
   * Whether to allow the experiment to reassign traffic to different variations when you increase
   * or decrease the traffic in your experiment audience (true) or keep all traffic assigned to its
   * initial variation (false). Defaults to true.
   */
  canReshuffleTraffic?: boolean;
  metrics: MetricInput[];
  /**
   * The key of the primary metric for this experiment. Either <code>primarySingleMetricKey</code>
   * or <code>primaryFunnelKey</code> must be present.
   */
  primarySingleMetricKey?: string;
  /**
   * The key of the primary funnel group for this experiment. Either
   * <code>primarySingleMetricKey</code> or <code>primaryFunnelKey</code> must be present.
   */
  primaryFunnelKey?: string;
  treatments: TreatmentInput[];
  flags: Record<string, FlagInput>;
  /** The unit of randomization for this iteration. Defaults to user. */
  randomizationUnit?: string;
  /** The attributes that this iteration's results can be sliced by */
  attributes?: string[];
};

export const iterationInputSchema: Schema<IterationInput> = s.object<IterationInput>({
  hypothesis: s.string(),
  canReshuffleTraffic: s.optional(s.boolean()),
  metrics: s.array(s.lazy(() => metricInputSchema)),
  primarySingleMetricKey: s.optional(s.string()),
  primaryFunnelKey: s.optional(s.string()),
  treatments: s.array(s.lazy(() => treatmentInputSchema)),
  flags: s.record(
    s.string(),
    s.lazy(() => flagInputSchema),
  ),
  randomizationUnit: s.optional(s.string()),
  attributes: s.optional(s.array(s.string())),
});
