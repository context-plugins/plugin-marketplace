import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DistinctConfiguration = {
  /** Defines the properties that are concatenated to produce distinct key */
  groupBy?: string[];
  /** maximum number of tracked combinations */
  maxCombinations?: number;
  /** maximum number of groupBy properties */
  maxDepth?: number;
  /** indicator that the operator runs on a federated executor */
  isFederated?: boolean;
  /** Toggle this on to suppress generating previews of intermediate results */
  suppressPreviews?: boolean;
};

export const distinctConfigurationSchema: Schema<DistinctConfiguration> = s.object<DistinctConfiguration>({
  groupBy: s.optional(s.array(s.string())),
  maxCombinations: s.optional(s.float64()),
  maxDepth: s.optional(s.float64()),
  isFederated: s.optional(s.boolean()),
  suppressPreviews: s.optional(s.boolean()),
});
