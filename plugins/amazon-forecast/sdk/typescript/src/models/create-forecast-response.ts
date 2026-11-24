import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateForecastResponse = {
  /** The Amazon Resource Name (ARN) of the forecast. */
  forecastArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createForecastResponseSchema: Schema<CreateForecastResponse> = s.object<CreateForecastResponse>(
  {
    forecastArn: s.optional(s.string()),
    _keysMap: {
      forecastArn: "ForecastArn",
    },
  },
  { additionalProperties: s.json() },
);
