import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteForecastRequest = {
  /** The Amazon Resource Name (ARN) of the forecast to delete. */
  forecastArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteForecastRequestSchema: Schema<DeleteForecastRequest> = s.object<DeleteForecastRequest>(
  {
    forecastArn: s.string(),
    _keysMap: {
      forecastArn: "ForecastArn",
    },
  },
  { additionalProperties: s.json() },
);
