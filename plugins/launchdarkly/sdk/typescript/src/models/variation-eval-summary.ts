import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VariationEvalSummary = {
  /** The variation value */
  value?: Record<string, unknown>;
  /** The number of evaluations in the ten minutes before the flag event */
  before?: number;
  /** The number of evaluations in the ten minutes after the flag event */
  after?: number;
};

export const variationEvalSummarySchema: Schema<VariationEvalSummary> = s.object<VariationEvalSummary>({
  value: s.optional(s.record(s.string(), s.unknown())),
  before: s.optional(s.int()),
  after: s.optional(s.int()),
});
