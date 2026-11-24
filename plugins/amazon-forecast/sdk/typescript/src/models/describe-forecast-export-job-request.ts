import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeForecastExportJobRequest = {
  /** The Amazon Resource Name (ARN) of the forecast export job. */
  forecastExportJobArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeForecastExportJobRequestSchema: Schema<DescribeForecastExportJobRequest> =
  s.object<DescribeForecastExportJobRequest>(
    {
      forecastExportJobArn: s.string(),
      _keysMap: {
        forecastExportJobArn: "ForecastExportJobArn",
      },
    },
    { additionalProperties: s.json() },
  );
