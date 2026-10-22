import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gaugeUpdateSchema, type GaugeUpdate } from "./gauge-update.js";

/** Configuration specific to the Pipeline Function. */
export type FunctionConfSchemaRollupMetrics1 = {
  /**
   * List of dimensions across which to perform rollups. Supports wildcards. Defaults to all
   * original dimensions.
   */
  dimensions?: string[];
  /** The time span of the rollup window. Must be a valid time string (such as 10s). */
  timeWindow?: string;
  /** The operation to use when rolling up gauge metrics. Defaults to last. */
  gaugeRollup?: GaugeUpdate;
};

export const functionConfSchemaRollupMetrics1Schema: Schema<FunctionConfSchemaRollupMetrics1> =
  s.object<FunctionConfSchemaRollupMetrics1>({
    dimensions: s.optional(s.array(s.string())),
    timeWindow: s.optional(s.string()),
    gaugeRollup: s.optional(s.lazy(() => gaugeUpdateSchema)),
  });
