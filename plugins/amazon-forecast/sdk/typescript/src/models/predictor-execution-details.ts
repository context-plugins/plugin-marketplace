import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { predictorExecutionSchema, type PredictorExecution } from "./predictor-execution.js";

export type PredictorExecutionDetails = {
  /**
   * An array of the backtests performed to evaluate the accuracy of the predictor against a
   * particular algorithm. The NumberOfBacktestWindows from the object determines the number of
   * windows in the array.
   */
  predictorExecutions?: PredictorExecution[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const predictorExecutionDetailsSchema: Schema<PredictorExecutionDetails> =
  s.object<PredictorExecutionDetails>(
    {
      predictorExecutions: s.optional(s.array(s.lazy(() => predictorExecutionSchema))),
      _keysMap: {
        predictorExecutions: "PredictorExecutions",
      },
    },
    { additionalProperties: s.json() },
  );
