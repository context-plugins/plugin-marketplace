import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  whatIfForecastExportSummarySchema,
  type WhatIfForecastExportSummary,
} from "./what-if-forecast-export-summary.js";

export type ListWhatIfForecastExportsResponse = {
  /** An array of WhatIfForecastExports objects that describe the matched forecast exports. */
  whatIfForecastExports?: WhatIfForecastExportSummary[];
  /**
   * If the response is truncated, Forecast returns this token. To retrieve the next set of results,
   * use the token in the next request.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listWhatIfForecastExportsResponseSchema: Schema<ListWhatIfForecastExportsResponse> =
  s.object<ListWhatIfForecastExportsResponse>(
    {
      whatIfForecastExports: s.optional(s.array(s.lazy(() => whatIfForecastExportSummarySchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        whatIfForecastExports: "WhatIfForecastExports",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
