import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  timeSeriesReplacementsDataSourceSchema,
  type TimeSeriesReplacementsDataSource,
} from "./time-series-replacements-data-source.js";
import {
  timeSeriesTransformationSchema,
  type TimeSeriesTransformation,
} from "./time-series-transformation.js";

export type DescribeWhatIfForecastResponse = {
  /** The name of the what-if forecast. */
  whatIfForecastName?: string;
  /** The Amazon Resource Name (ARN) of the what-if forecast. */
  whatIfForecastArn?: string;
  /** The Amazon Resource Name (ARN) of the what-if analysis that contains this forecast. */
  whatIfAnalysisArn?: string;
  /** The approximate time remaining to complete the what-if forecast, in minutes. */
  estimatedTimeRemainingInMinutes?: number;
  /**
   * The status of the what-if forecast. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS,
   * CREATE_FAILED CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED
   * The Status of the what-if forecast must be ACTIVE before you can access the forecast.
   */
  status?: string;
  /** If an error occurred, an informational message about the error. */
  message?: string;
  /** When the what-if forecast was created. */
  creationTime?: Date;
  /**
   * The last time the resource was modified. The timestamp depends on the status of the job:
   * CREATE_PENDING - The CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING
   * - The current timestamp. CREATE_STOPPED - When the job stopped. ACTIVE or CREATE_FAILED - When
   * the job finished or failed.
   */
  lastModificationTime?: Date;
  /**
   * An array of Action and TimeSeriesConditions elements that describe what transformations were
   * applied to which time series.
   */
  timeSeriesTransformations?: TimeSeriesTransformation[];
  timeSeriesReplacementsDataSource?: TimeSeriesReplacementsDataSource;
  /**
   * The quantiles at which probabilistic forecasts are generated. You can specify up to five
   * quantiles per what-if forecast in the CreateWhatIfForecast operation. If you didn't specify
   * quantiles, the default values are ["0.1", "0.5", "0.9"].
   */
  forecastTypes?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeWhatIfForecastResponseSchema: Schema<DescribeWhatIfForecastResponse> =
  s.object<DescribeWhatIfForecastResponse>(
    {
      whatIfForecastName: s.optional(s.string()),
      whatIfForecastArn: s.optional(s.string()),
      whatIfAnalysisArn: s.optional(s.string()),
      estimatedTimeRemainingInMinutes: s.optional(s.int()),
      status: s.optional(s.string()),
      message: s.optional(s.string()),
      creationTime: s.optional(s.dateTime()),
      lastModificationTime: s.optional(s.dateTime()),
      timeSeriesTransformations: s.optional(s.array(s.lazy(() => timeSeriesTransformationSchema))),
      timeSeriesReplacementsDataSource: s.optional(s.lazy(() => timeSeriesReplacementsDataSourceSchema)),
      forecastTypes: s.optional(s.array(s.string())),
      _keysMap: {
        whatIfForecastName: "WhatIfForecastName",
        whatIfForecastArn: "WhatIfForecastArn",
        whatIfAnalysisArn: "WhatIfAnalysisArn",
        estimatedTimeRemainingInMinutes: "EstimatedTimeRemainingInMinutes",
        status: "Status",
        message: "Message",
        creationTime: "CreationTime",
        lastModificationTime: "LastModificationTime",
        timeSeriesTransformations: "TimeSeriesTransformations",
        timeSeriesReplacementsDataSource: "TimeSeriesReplacementsDataSource",
        forecastTypes: "ForecastTypes",
      },
    },
    { additionalProperties: s.json() },
  );
