import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreatePredictorBacktestExportJobResponse = {
  /**
   * The Amazon Resource Name (ARN) of the predictor backtest export job that you want to export.
   */
  predictorBacktestExportJobArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createPredictorBacktestExportJobResponseSchema: Schema<CreatePredictorBacktestExportJobResponse> =
  s.object<CreatePredictorBacktestExportJobResponse>(
    {
      predictorBacktestExportJobArn: s.optional(s.string()),
      _keysMap: {
        predictorBacktestExportJobArn: "PredictorBacktestExportJobArn",
      },
    },
    { additionalProperties: s.json() },
  );
