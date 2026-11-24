import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { windowSummarySchema, type WindowSummary } from "./window-summary.js";

export type EvaluationResult = {
  /** The Amazon Resource Name (ARN) of the algorithm that was evaluated. */
  algorithmArn?: string;
  /**
   * The array of test windows used for evaluating the algorithm. The NumberOfBacktestWindows from
   * the EvaluationParameters object determines the number of windows in the array.
   */
  testWindows?: WindowSummary[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const evaluationResultSchema: Schema<EvaluationResult> = s.object<EvaluationResult>(
  {
    algorithmArn: s.optional(s.string()),
    testWindows: s.optional(s.array(s.lazy(() => windowSummarySchema))),
    _keysMap: {
      algorithmArn: "AlgorithmArn",
      testWindows: "TestWindows",
    },
  },
  { additionalProperties: s.json() },
);
