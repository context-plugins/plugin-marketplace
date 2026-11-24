import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { predictorSummarySchema, type PredictorSummary } from "./predictor-summary.js";

export type ListPredictorsResponse = {
  /** An array of objects that summarize each predictor's properties. */
  predictors?: PredictorSummary[];
  /**
   * If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of
   * results, use the token in the next request.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listPredictorsResponseSchema: Schema<ListPredictorsResponse> = s.object<ListPredictorsResponse>(
  {
    predictors: s.optional(s.array(s.lazy(() => predictorSummarySchema))),
    nextToken: s.optional(s.string()),
    _keysMap: {
      predictors: "Predictors",
      nextToken: "NextToken",
    },
  },
  { additionalProperties: s.json() },
);
