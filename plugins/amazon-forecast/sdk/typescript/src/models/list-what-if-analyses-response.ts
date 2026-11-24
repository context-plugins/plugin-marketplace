import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { whatIfAnalysisSummarySchema, type WhatIfAnalysisSummary } from "./what-if-analysis-summary.js";

export type ListWhatIfAnalysesResponse = {
  /** An array of WhatIfAnalysisSummary objects that describe the matched analyses. */
  whatIfAnalyses?: WhatIfAnalysisSummary[];
  /**
   * If the response is truncated, Forecast returns this token. To retrieve the next set of results,
   * use the token in the next request.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listWhatIfAnalysesResponseSchema: Schema<ListWhatIfAnalysesResponse> =
  s.object<ListWhatIfAnalysesResponse>(
    {
      whatIfAnalyses: s.optional(s.array(s.lazy(() => whatIfAnalysisSummarySchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        whatIfAnalyses: "WhatIfAnalyses",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
