import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MonitorDataSource = {
  /**
   * The Amazon Resource Name (ARN) of the dataset import job used to import the data that initiated
   * the monitor evaluation.
   */
  datasetImportJobArn?: string;
  /** The Amazon Resource Name (ARN) of the forecast the monitor used during the evaluation. */
  forecastArn?: string;
  /** The Amazon Resource Name (ARN) of the predictor resource you are monitoring. */
  predictorArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const monitorDataSourceSchema: Schema<MonitorDataSource> = s.object<MonitorDataSource>(
  {
    datasetImportJobArn: s.optional(s.string()),
    forecastArn: s.optional(s.string()),
    predictorArn: s.optional(s.string()),
    _keysMap: {
      datasetImportJobArn: "DatasetImportJobArn",
      forecastArn: "ForecastArn",
      predictorArn: "PredictorArn",
    },
  },
  { additionalProperties: s.json() },
);
