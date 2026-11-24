import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeWhatIfForecastRequest = {
  /** The Amazon Resource Name (ARN) of the what-if forecast that you are interested in. */
  whatIfForecastArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeWhatIfForecastRequestSchema: Schema<DescribeWhatIfForecastRequest> =
  s.object<DescribeWhatIfForecastRequest>(
    {
      whatIfForecastArn: s.string(),
      _keysMap: {
        whatIfForecastArn: "WhatIfForecastArn",
      },
    },
    { additionalProperties: s.json() },
  );
