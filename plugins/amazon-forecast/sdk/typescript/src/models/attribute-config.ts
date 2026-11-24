import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AttributeConfig = {
  /**
   * The name of the attribute as specified in the schema. Amazon Forecast supports the target field
   * of the target time series and the related time series datasets. For example, for the RETAIL
   * domain, the target is demand.
   */
  attributeName: string;
  /**
   * The method parameters (key-value pairs), which are a map of override parameters. Specify these
   * parameters to override the default values. Related Time Series attributes do not accept
   * aggregation parameters. The following list shows the parameters and their valid values for the
   * "filling" featurization method for a Target Time Series dataset. Default values are bolded.
   * aggregation: sum, avg, first, min, max frontfill: none middlefill: zero, nan (not a number),
   * value, median, mean, min, max backfill: zero, nan, value, median, mean, min, max The following
   * list shows the parameters and their valid
   */
  transformations: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const attributeConfigSchema: Schema<AttributeConfig> = s.object<AttributeConfig>(
  {
    attributeName: s.string(),
    transformations: s.record(s.string(), s.string()),
    _keysMap: {
      attributeName: "AttributeName",
      transformations: "Transformations",
    },
  },
  { additionalProperties: s.json() },
);
