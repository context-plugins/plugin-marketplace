import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { variationSummarySchema, type VariationSummary } from "./variation-summary.js";

export type FlagSummary = {
  variations: Record<string, VariationSummary>;
  /** The number of prerequisites for this flag */
  prerequisites: number;
};

export const flagSummarySchema: Schema<FlagSummary> = s.object<FlagSummary>({
  variations: s.record(
    s.string(),
    s.lazy(() => variationSummarySchema),
  ),
  prerequisites: s.int(),
});
