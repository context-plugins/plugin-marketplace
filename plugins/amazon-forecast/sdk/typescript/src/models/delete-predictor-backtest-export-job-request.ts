import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeletePredictorBacktestExportJobRequest = {
  /** The Amazon Resource Name (ARN) of the predictor backtest export job to delete. */
  predictorBacktestExportJobArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deletePredictorBacktestExportJobRequestSchema: Schema<DeletePredictorBacktestExportJobRequest> =
  s.object<DeletePredictorBacktestExportJobRequest>(
    {
      predictorBacktestExportJobArn: s.string(),
      _keysMap: {
        predictorBacktestExportJobArn: "PredictorBacktestExportJobArn",
      },
    },
    { additionalProperties: s.json() },
  );
