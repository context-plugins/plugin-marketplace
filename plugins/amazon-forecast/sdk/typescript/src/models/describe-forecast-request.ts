import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeForecastRequest = {
  /** The Amazon Resource Name (ARN) of the forecast. */
  forecastArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeForecastRequestSchema: Schema<DescribeForecastRequest> =
  s.object<DescribeForecastRequest>(
    {
      forecastArn: s.string(),
      _keysMap: {
        forecastArn: "ForecastArn",
      },
    },
    { additionalProperties: s.json() },
  );
