import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateAutoPredictorResponse = {
  /** The Amazon Resource Name (ARN) of the predictor. */
  predictorArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createAutoPredictorResponseSchema: Schema<CreateAutoPredictorResponse> =
  s.object<CreateAutoPredictorResponse>(
    {
      predictorArn: s.optional(s.string()),
      _keysMap: {
        predictorArn: "PredictorArn",
      },
    },
    { additionalProperties: s.json() },
  );
