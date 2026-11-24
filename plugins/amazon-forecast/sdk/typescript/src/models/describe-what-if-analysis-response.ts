import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { timeSeriesSelectorSchema, type TimeSeriesSelector } from "./time-series-selector.js";

export type DescribeWhatIfAnalysisResponse = {
  /** The name of the what-if analysis. */
  whatIfAnalysisName?: string;
  /** The Amazon Resource Name (ARN) of the what-if analysis. */
  whatIfAnalysisArn?: string;
  /** The Amazon Resource Name (ARN) of the what-if forecast. */
  forecastArn?: string;
  /** The approximate time remaining to complete the what-if analysis, in minutes. */
  estimatedTimeRemainingInMinutes?: number;
  /**
   * The status of the what-if analysis. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS,
   * CREATE_FAILED CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED
   * The Status of the what-if analysis must be ACTIVE before you can access the analysis.
   */
  status?: string;
  /** If an error occurred, an informational message about the error. */
  message?: string;
  /** When the what-if analysis was created. */
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

export const describeWhatIfAnalysisResponseSchema: Schema<DescribeWhatIfAnalysisResponse> =
  s.object<DescribeWhatIfAnalysisResponse>(
    {
      whatIfAnalysisName: s.optional(s.string()),
      whatIfAnalysisArn: s.optional(s.string()),
      forecastArn: s.optional(s.string()),
      estimatedTimeRemainingInMinutes: s.optional(s.int()),
      status: s.optional(s.string()),
      message: s.optional(s.string()),
      creationTime: s.optional(s.dateTime()),
      lastModificationTime: s.optional(s.dateTime()),
      timeSeriesSelector: s.optional(s.lazy(() => timeSeriesSelectorSchema)),
      _keysMap: {
        whatIfAnalysisName: "WhatIfAnalysisName",
        whatIfAnalysisArn: "WhatIfAnalysisArn",
        forecastArn: "ForecastArn",
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
