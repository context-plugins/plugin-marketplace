import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { timeSeriesSelectorSchema, type TimeSeriesSelector } from "./time-series-selector.js";

export type DescribeForecastResponse = {
  /** The forecast ARN as specified in the request. */
  forecastArn?: string;
  /** The name of the forecast. */
  forecastName?: string;
  /** The quantiles at which probabilistic forecasts were generated. */
  forecastTypes?: string[];
  /** The ARN of the predictor used to generate the forecast. */
  predictorArn?: string;
  /** The ARN of the dataset group that provided the data used to train the predictor. */
  datasetGroupArn?: string;
  /** The estimated time remaining in minutes for the forecast job to complete. */
  estimatedTimeRemainingInMinutes?: number;
  /**
   * The status of the forecast. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS,
   * CREATE_FAILED CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED
   * The Status of the forecast must be ACTIVE before you can query or export the forecast.
   */
  status?: string;
  /** If an error occurred, an informational message about the error. */
  message?: string;
  /** When the forecast creation task was created. */
  creationTime?: Date;
  /**
   * The last time the resource was modified. The timestamp depends on the status of the job:
   * CREATE_PENDING - The CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING
   * - The current timestamp. CREATE_STOPPED - When the job stopped. ACTIVE or CREATE_FAILED - When
   * the job finished or failed.
   */
  lastModificationTime?: Date;
  timeSeriesSelector?: TimeSeriesSelector;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeForecastResponseSchema: Schema<DescribeForecastResponse> =
  s.object<DescribeForecastResponse>(
    {
      forecastArn: s.optional(s.string()),
      forecastName: s.optional(s.string()),
      forecastTypes: s.optional(s.array(s.string())),
      predictorArn: s.optional(s.string()),
      datasetGroupArn: s.optional(s.string()),
      estimatedTimeRemainingInMinutes: s.optional(s.int()),
      status: s.optional(s.string()),
      message: s.optional(s.string()),
      creationTime: s.optional(s.dateTime()),
      lastModificationTime: s.optional(s.dateTime()),
      timeSeriesSelector: s.optional(s.lazy(() => timeSeriesSelectorSchema)),
      _keysMap: {
        forecastArn: "ForecastArn",
        forecastName: "ForecastName",
        forecastTypes: "ForecastTypes",
        predictorArn: "PredictorArn",
        datasetGroupArn: "DatasetGroupArn",
        estimatedTimeRemainingInMinutes: "EstimatedTimeRemainingInMinutes",
        status: "Status",
        message: "Message",
        creationTime: "CreationTime",
        lastModificationTime: "LastModificationTime",
        timeSeriesSelector: "TimeSeriesSelector",
      },
    },
    { additionalProperties: s.json() },
  );
