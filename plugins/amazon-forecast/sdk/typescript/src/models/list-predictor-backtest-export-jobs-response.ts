import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  predictorBacktestExportJobSummarySchema,
  type PredictorBacktestExportJobSummary,
} from "./predictor-backtest-export-job-summary.js";

export type ListPredictorBacktestExportJobsResponse = {
  /** An array of objects that summarize the properties of each predictor backtest export job. */
  predictorBacktestExportJobs?: PredictorBacktestExportJobSummary[];
  /**
   * Returns this token if the response is truncated. To retrieve the next set of results, use the
   * token in the next request.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listPredictorBacktestExportJobsResponseSchema: Schema<ListPredictorBacktestExportJobsResponse> =
  s.object<ListPredictorBacktestExportJobsResponse>(
    {
      predictorBacktestExportJobs: s.optional(s.array(s.lazy(() => predictorBacktestExportJobSummarySchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        predictorBacktestExportJobs: "PredictorBacktestExportJobs",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
