import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  predictorMonitorEvaluationSchema,
  type PredictorMonitorEvaluation,
} from "./predictor-monitor-evaluation.js";

export type ListMonitorEvaluationsResponse = {
  /**
   * If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of
   * results, use the token in the next request. Tokens expire after 24 hours.
   */
  nextToken?: string;
  /**
   * The monitoring results and predictor events collected by the monitor resource during different
   * windows of time. For information about monitoring see Viewing Monitoring Results. For more
   * information about retrieving monitoring results see Viewing Monitoring Results.
   */
  predictorMonitorEvaluations?: PredictorMonitorEvaluation[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listMonitorEvaluationsResponseSchema: Schema<ListMonitorEvaluationsResponse> =
  s.object<ListMonitorEvaluationsResponse>(
    {
      nextToken: s.optional(s.string()),
      predictorMonitorEvaluations: s.optional(s.array(s.lazy(() => predictorMonitorEvaluationSchema))),
      _keysMap: {
        nextToken: "NextToken",
        predictorMonitorEvaluations: "PredictorMonitorEvaluations",
      },
    },
    { additionalProperties: s.json() },
  );
