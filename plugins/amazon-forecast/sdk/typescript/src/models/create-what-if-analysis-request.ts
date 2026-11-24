import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagSchema, type Tag } from "./tag.js";
import { timeSeriesSelectorSchema, type TimeSeriesSelector } from "./time-series-selector.js";

export type CreateWhatIfAnalysisRequest = {
  /** The name of the what-if analysis. Each name must be unique. */
  whatIfAnalysisName: string;
  /** The Amazon Resource Name (ARN) of the baseline forecast. */
  forecastArn: string;
  timeSeriesSelector?: TimeSeriesSelector;
  /** A list of tags to apply to the what if forecast. */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createWhatIfAnalysisRequestSchema: Schema<CreateWhatIfAnalysisRequest> =
  s.object<CreateWhatIfAnalysisRequest>(
    {
      whatIfAnalysisName: s.string(),
      forecastArn: s.string(),
      timeSeriesSelector: s.optional(s.lazy(() => timeSeriesSelectorSchema)),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      _keysMap: {
        whatIfAnalysisName: "WhatIfAnalysisName",
        forecastArn: "ForecastArn",
        timeSeriesSelector: "TimeSeriesSelector",
        tags: "Tags",
      },
    },
    { additionalProperties: s.json() },
  );
