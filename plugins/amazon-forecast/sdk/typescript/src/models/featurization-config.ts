import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { featurizationSchema, type Featurization } from "./featurization.js";

export type FeaturizationConfig = {
  /**
   * The frequency of predictions in a forecast. Valid intervals are an integer followed by Y
   * (Year), M (Month), W (Week), D (Day), H (Hour), and min (Minute). For example, "1D" indicates
   * every day and "15min" indicates every 15 minutes. You cannot specify a value that would overlap
   * with the next larger frequency. That means, for example, you cannot specify a frequency of 60
   * minutes, because that is equivalent to 1 hour. The valid values for each frequency are the
   * following: Minute - 1-59 Hour - 1-23 Day - 1-6 Week - 1-4 Month - 1-11 Year - 1 Thus, if you
   * want every other week forecasts, specify "2
   */
  forecastFrequency: string;
  /**
   * An array of dimension (field) names that specify how to group the generated forecast. For
   * example, suppose that you are generating a forecast for item sales across all of your stores,
   * and your dataset contains a store_id field. If you want the sales forecast for each item by
   * store, you would specify store_id as the dimension. All forecast dimensions specified in the
   * TARGET_TIME_SERIES dataset don't need to be specified in the CreatePredictor request. All
   * forecast dimensions specified in the RELATED_TIME_SERIES dataset must be specified in the
   * CreatePredictor request.
   */
  forecastDimensions?: string[];
  /** An array of featurization (transformation) information for the fields of a dataset. */
  featurizations?: Featurization[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const featurizationConfigSchema: Schema<FeaturizationConfig> = s.object<FeaturizationConfig>(
  {
    forecastFrequency: s.string(),
    forecastDimensions: s.optional(s.array(s.string())),
    featurizations: s.optional(s.array(s.lazy(() => featurizationSchema))),
    _keysMap: {
      forecastFrequency: "ForecastFrequency",
      forecastDimensions: "ForecastDimensions",
      featurizations: "Featurizations",
    },
  },
  { additionalProperties: s.json() },
);
