import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { variationEvalSummarySchema, type VariationEvalSummary } from "./variation-eval-summary.js";

export type EvaluationsSummary = {
  /** A list of variation evaluations */
  variations?: VariationEvalSummary[];
};

export const evaluationsSummarySchema: Schema<EvaluationsSummary> = s.object<EvaluationsSummary>({
  variations: s.optional(s.array(s.lazy(() => variationEvalSummarySchema))),
});
