import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeletePredictorRequest = {
  /** The Amazon Resource Name (ARN) of the predictor to delete. */
  predictorArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deletePredictorRequestSchema: Schema<DeletePredictorRequest> = s.object<DeletePredictorRequest>(
  {
    predictorArn: s.string(),
    _keysMap: {
      predictorArn: "PredictorArn",
    },
  },
  { additionalProperties: s.json() },
);
