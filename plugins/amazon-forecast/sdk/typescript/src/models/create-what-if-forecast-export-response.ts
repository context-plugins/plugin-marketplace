import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateWhatIfForecastExportResponse = {
  /** The Amazon Resource Name (ARN) of the what-if forecast. */
  whatIfForecastExportArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createWhatIfForecastExportResponseSchema: Schema<CreateWhatIfForecastExportResponse> =
  s.object<CreateWhatIfForecastExportResponse>(
    {
      whatIfForecastExportArn: s.optional(s.string()),
      _keysMap: {
        whatIfForecastExportArn: "WhatIfForecastExportArn",
      },
    },
    { additionalProperties: s.json() },
  );
