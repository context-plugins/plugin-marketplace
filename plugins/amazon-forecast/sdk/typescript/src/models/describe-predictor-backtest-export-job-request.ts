import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribePredictorBacktestExportJobRequest = {
  /** The Amazon Resource Name (ARN) of the predictor backtest export job. */
  predictorBacktestExportJobArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describePredictorBacktestExportJobRequestSchema: Schema<DescribePredictorBacktestExportJobRequest> =
  s.object<DescribePredictorBacktestExportJobRequest>(
    {
      predictorBacktestExportJobArn: s.string(),
      _keysMap: {
        predictorBacktestExportJobArn: "PredictorBacktestExportJobArn",
      },
    },
    { additionalProperties: s.json() },
  );
