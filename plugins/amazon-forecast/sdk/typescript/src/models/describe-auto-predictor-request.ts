import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeAutoPredictorRequest = {
  /** The Amazon Resource Name (ARN) of the predictor. */
  predictorArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeAutoPredictorRequestSchema: Schema<DescribeAutoPredictorRequest> =
  s.object<DescribeAutoPredictorRequest>(
    {
      predictorArn: s.string(),
      _keysMap: {
        predictorArn: "PredictorArn",
      },
    },
    { additionalProperties: s.json() },
  );
