import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  forecastExportJobSummarySchema,
  type ForecastExportJobSummary,
} from "./forecast-export-job-summary.js";

export type ListForecastExportJobsResponse = {
  /** An array of objects that summarize each export job's properties. */
  forecastExportJobs?: ForecastExportJobSummary[];
  /**
   * If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of
   * results, use the token in the next request.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listForecastExportJobsResponseSchema: Schema<ListForecastExportJobsResponse> =
  s.object<ListForecastExportJobsResponse>(
    {
      forecastExportJobs: s.optional(s.array(s.lazy(() => forecastExportJobSummarySchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        forecastExportJobs: "ForecastExportJobs",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
