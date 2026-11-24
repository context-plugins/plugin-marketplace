import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagSchema, type Tag } from "./tag.js";
import { timeSeriesSelectorSchema, type TimeSeriesSelector } from "./time-series-selector.js";

export type CreateForecastRequest = {
  /** A name for the forecast. */
  forecastName: string;
  /** The Amazon Resource Name (ARN) of the predictor to use to generate the forecast. */
  predictorArn: string;
  /**
   * The quantiles at which probabilistic forecasts are generated. You can currently specify up to 5
   * quantiles per forecast. Accepted values include 0.01 to 0.99 (increments of .01 only) and mean.
   * The mean forecast is different from the median (0.50) when the distribution is not symmetric
   * (for example, Beta and Negative Binomial). The default quantiles are the quantiles you
   * specified during predictor creation. If you didn't specify quantiles, the default values are
   * ["0.1", "0.5", "0.9"].
   */
  forecastTypes?: string[];
  /**
   * The optional metadata that you apply to the forecast to help you categorize and organize them.
   * Each tag consists of a key and an optional value, both of which you define. The following basic
   * restrictions apply to tags: Maximum number of tags per resource - 50. For each resource, each
   * tag key must be unique, and each tag key can have only one value. Maximum key length - 128
   * Unicode characters in UTF-8. Maximum value length - 256 Unicode characters in UTF-8. If your
   * tagging schema is used across multiple services and resources, remember that other services may
   * have restrictions on allowed charac
   */
  tags?: Tag[];
  timeSeriesSelector?: TimeSeriesSelector;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createForecastRequestSchema: Schema<CreateForecastRequest> = s.object<CreateForecastRequest>(
  {
    forecastName: s.string(),
    predictorArn: s.string(),
    forecastTypes: s.optional(s.array(s.string())),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
    timeSeriesSelector: s.optional(s.lazy(() => timeSeriesSelectorSchema)),
    _keysMap: {
      forecastName: "ForecastName",
      predictorArn: "PredictorArn",
      forecastTypes: "ForecastTypes",
      tags: "Tags",
      timeSeriesSelector: "TimeSeriesSelector",
    },
  },
  { additionalProperties: s.json() },
);
