import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { testWindowSummarySchema, type TestWindowSummary } from "./test-window-summary.js";

export type PredictorExecution = {
  /** The ARN of the algorithm used to test the predictor. */
  algorithmArn?: string;
  /**
   * An array of test windows used to evaluate the algorithm. The NumberOfBacktestWindows from the
   * object determines the number of windows in the array.
   */
  testWindows?: TestWindowSummary[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const predictorExecutionSchema: Schema<PredictorExecution> = s.object<PredictorExecution>(
  {
    algorithmArn: s.optional(s.string()),
    testWindows: s.optional(s.array(s.lazy(() => testWindowSummarySchema))),
    _keysMap: {
      algorithmArn: "AlgorithmArn",
      testWindows: "TestWindows",
    },
  },
  { additionalProperties: s.json() },
);
