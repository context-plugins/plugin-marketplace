import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteWhatIfForecastExportRequest = {
  /** The Amazon Resource Name (ARN) of the what-if forecast export that you want to delete. */
  whatIfForecastExportArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteWhatIfForecastExportRequestSchema: Schema<DeleteWhatIfForecastExportRequest> =
  s.object<DeleteWhatIfForecastExportRequest>(
    {
      whatIfForecastExportArn: s.string(),
      _keysMap: {
        whatIfForecastExportArn: "WhatIfForecastExportArn",
      },
    },
    { additionalProperties: s.json() },
  );
