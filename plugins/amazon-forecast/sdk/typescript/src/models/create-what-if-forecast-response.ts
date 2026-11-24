import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateWhatIfForecastResponse = {
  /** The Amazon Resource Name (ARN) of the what-if forecast. */
  whatIfForecastArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createWhatIfForecastResponseSchema: Schema<CreateWhatIfForecastResponse> =
  s.object<CreateWhatIfForecastResponse>(
    {
      whatIfForecastArn: s.optional(s.string()),
      _keysMap: {
        whatIfForecastArn: "WhatIfForecastArn",
      },
    },
    { additionalProperties: s.json() },
  );
