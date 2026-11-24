import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteWhatIfForecastRequest = {
  /** The Amazon Resource Name (ARN) of the what-if forecast that you want to delete. */
  whatIfForecastArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteWhatIfForecastRequestSchema: Schema<DeleteWhatIfForecastRequest> =
  s.object<DeleteWhatIfForecastRequest>(
    {
      whatIfForecastArn: s.string(),
      _keysMap: {
        whatIfForecastArn: "WhatIfForecastArn",
      },
    },
    { additionalProperties: s.json() },
  );
