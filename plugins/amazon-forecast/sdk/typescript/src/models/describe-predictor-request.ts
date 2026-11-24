import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribePredictorRequest = {
  /** The Amazon Resource Name (ARN) of the predictor that you want information about. */
  predictorArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describePredictorRequestSchema: Schema<DescribePredictorRequest> =
  s.object<DescribePredictorRequest>(
    {
      predictorArn: s.string(),
      _keysMap: {
        predictorArn: "PredictorArn",
      },
    },
    { additionalProperties: s.json() },
  );
