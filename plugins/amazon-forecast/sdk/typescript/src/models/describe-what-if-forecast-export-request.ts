import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeWhatIfForecastExportRequest = {
  /** The Amazon Resource Name (ARN) of the what-if forecast export that you are interested in. */
  whatIfForecastExportArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeWhatIfForecastExportRequestSchema: Schema<DescribeWhatIfForecastExportRequest> =
  s.object<DescribeWhatIfForecastExportRequest>(
    {
      whatIfForecastExportArn: s.string(),
      _keysMap: {
        whatIfForecastExportArn: "WhatIfForecastExportArn",
      },
    },
    { additionalProperties: s.json() },
  );
