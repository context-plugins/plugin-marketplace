import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateForecastExportJobResponse = {
  /** The Amazon Resource Name (ARN) of the export job. */
  forecastExportJobArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createForecastExportJobResponseSchema: Schema<CreateForecastExportJobResponse> =
  s.object<CreateForecastExportJobResponse>(
    {
      forecastExportJobArn: s.optional(s.string()),
      _keysMap: {
        forecastExportJobArn: "ForecastExportJobArn",
      },
    },
    { additionalProperties: s.json() },
  );
