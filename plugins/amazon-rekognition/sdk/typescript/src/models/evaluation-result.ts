import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { summarySchema, type Summary } from "./summary.js";

export type EvaluationResult = {
  /**
   * The F1 score for the evaluation of all labels. The F1 score metric evaluates the overall
   * precision and recall performance of the model as a single value. A higher value indicates
   * better precision and recall performance. A lower score indicates that precision, recall, or
   * both are performing poorly.
   */
  f1Score?: number;
  summary?: Summary;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const evaluationResultSchema: Schema<EvaluationResult> = s.object<EvaluationResult>(
  {
    f1Score: s.optional(s.float64()),
    summary: s.optional(s.lazy(() => summarySchema)),
    _keysMap: {
      f1Score: "F1Score",
      summary: "Summary",
    },
  },
  { additionalProperties: s.json() },
);
