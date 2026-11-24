import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { forecastSummarySchema, type ForecastSummary } from "./forecast-summary.js";

export type ListForecastsResponse = {
  /** An array of objects that summarize each forecast's properties. */
  forecasts?: ForecastSummary[];
  /**
   * If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of
   * results, use the token in the next request.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listForecastsResponseSchema: Schema<ListForecastsResponse> = s.object<ListForecastsResponse>(
  {
    forecasts: s.optional(s.array(s.lazy(() => forecastSummarySchema))),
    nextToken: s.optional(s.string()),
    _keysMap: {
      forecasts: "Forecasts",
      nextToken: "NextToken",
    },
  },
  { additionalProperties: s.json() },
);
