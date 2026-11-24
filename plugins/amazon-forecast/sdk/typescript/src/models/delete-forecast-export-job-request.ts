import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteForecastExportJobRequest = {
  /** The Amazon Resource Name (ARN) of the forecast export job to delete. */
  forecastExportJobArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteForecastExportJobRequestSchema: Schema<DeleteForecastExportJobRequest> =
  s.object<DeleteForecastExportJobRequest>(
    {
      forecastExportJobArn: s.string(),
      _keysMap: {
        forecastExportJobArn: "ForecastExportJobArn",
      },
    },
    { additionalProperties: s.json() },
  );
