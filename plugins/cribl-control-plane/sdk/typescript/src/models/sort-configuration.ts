import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SortConfiguration = {
  /** Has to be unique if there are multiple sorts on the pipeline. */
  sortId?: string;
  /** The expression can access the events via the 'left' and 'right' properties. */
  comparisonExpression?: string;
  /** Limits the output to N (highest/lowest) events */
  topN?: number;
  /** Specifies the number of events that can flow into this function */
  maxEvents?: number;
  /** Toggle this on to suppress generating previews of intermediate results */
  suppressPreviews?: boolean;
};

export const sortConfigurationSchema: Schema<SortConfiguration> = s.object<SortConfiguration>({
  sortId: s.optional(s.string()),
  comparisonExpression: s.optional(s.string()),
  topN: s.optional(s.float64()),
  maxEvents: s.optional(s.float64()),
  suppressPreviews: s.optional(s.boolean()),
});
