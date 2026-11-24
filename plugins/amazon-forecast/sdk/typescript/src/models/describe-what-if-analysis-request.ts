import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeWhatIfAnalysisRequest = {
  /** The Amazon Resource Name (ARN) of the what-if analysis that you are interested in. */
  whatIfAnalysisArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeWhatIfAnalysisRequestSchema: Schema<DescribeWhatIfAnalysisRequest> =
  s.object<DescribeWhatIfAnalysisRequest>(
    {
      whatIfAnalysisArn: s.string(),
      _keysMap: {
        whatIfAnalysisArn: "WhatIfAnalysisArn",
      },
    },
    { additionalProperties: s.json() },
  );
