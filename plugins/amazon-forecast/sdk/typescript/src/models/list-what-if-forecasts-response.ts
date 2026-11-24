import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { whatIfForecastSummarySchema, type WhatIfForecastSummary } from "./what-if-forecast-summary.js";

export type ListWhatIfForecastsResponse = {
  /** An array of WhatIfForecasts objects that describe the matched forecasts. */
  whatIfForecasts?: WhatIfForecastSummary[];
  /**
   * If the result of the previous request was truncated, the response includes a NextToken. To
   * retrieve the next set of results, use the token in the next request. Tokens expire after 24
   * hours.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listWhatIfForecastsResponseSchema: Schema<ListWhatIfForecastsResponse> =
  s.object<ListWhatIfForecastsResponse>(
    {
      whatIfForecasts: s.optional(s.array(s.lazy(() => whatIfForecastSummarySchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        whatIfForecasts: "WhatIfForecasts",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
