import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagSchema, type Tag } from "./tag.js";
import {
  timeSeriesReplacementsDataSourceSchema,
  type TimeSeriesReplacementsDataSource,
} from "./time-series-replacements-data-source.js";
import {
  timeSeriesTransformationSchema,
  type TimeSeriesTransformation,
} from "./time-series-transformation.js";

export type CreateWhatIfForecastRequest = {
  /** The name of the what-if forecast. Names must be unique within each what-if analysis. */
  whatIfForecastName: string;
  /** The Amazon Resource Name (ARN) of the what-if analysis. */
  whatIfAnalysisArn: string;
  /**
   * The transformations that are applied to the baseline time series. Each transformation contains
   * an action and a set of conditions. An action is applied only when all conditions are met. If no
   * conditions are provided, the action is applied to all items.
   */
  timeSeriesTransformations?: TimeSeriesTransformation[];
  timeSeriesReplacementsDataSource?: TimeSeriesReplacementsDataSource;
  /** A list of tags to apply to the what if forecast. */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createWhatIfForecastRequestSchema: Schema<CreateWhatIfForecastRequest> =
  s.object<CreateWhatIfForecastRequest>(
    {
      whatIfForecastName: s.string(),
      whatIfAnalysisArn: s.string(),
      timeSeriesTransformations: s.optional(s.array(s.lazy(() => timeSeriesTransformationSchema))),
      timeSeriesReplacementsDataSource: s.optional(s.lazy(() => timeSeriesReplacementsDataSourceSchema)),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      _keysMap: {
        whatIfForecastName: "WhatIfForecastName",
        whatIfAnalysisArn: "WhatIfAnalysisArn",
        timeSeriesTransformations: "TimeSeriesTransformations",
        timeSeriesReplacementsDataSource: "TimeSeriesReplacementsDataSource",
        tags: "Tags",
      },
    },
    { additionalProperties: s.json() },
  );
