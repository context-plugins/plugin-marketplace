import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetAccuracyMetricsRequest = {
  /** The Amazon Resource Name (ARN) of the predictor to get metrics for. */
  predictorArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getAccuracyMetricsRequestSchema: Schema<GetAccuracyMetricsRequest> =
  s.object<GetAccuracyMetricsRequest>(
    {
      predictorArn: s.string(),
      _keysMap: {
        predictorArn: "PredictorArn",
      },
    },
    { additionalProperties: s.json() },
  );
