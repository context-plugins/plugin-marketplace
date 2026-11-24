import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  conditionAmazonForecastServiceWhatIfForecastApiSchema,
  type ConditionAmazonForecastServiceWhatIfForecastApi,
} from "./condition-amazon-forecast-service-what-if-forecast-api.js";

export type TimeSeriesCondition = {
  /** The item_id, dimension name, IM name, or timestamp that you are modifying. */
  attributeName: string;
  /** The value that is applied for the chosen Condition. */
  attributeValue: string;
  /** The condition to apply. Valid values are EQUALS, NOT_EQUALS, LESS_THAN and GREATER_THAN. */
  condition: ConditionAmazonForecastServiceWhatIfForecastApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const timeSeriesConditionSchema: Schema<TimeSeriesCondition> = s.object<TimeSeriesCondition>(
  {
    attributeName: s.string(),
    attributeValue: s.string(),
    condition: conditionAmazonForecastServiceWhatIfForecastApiSchema,
    _keysMap: {
      attributeName: "AttributeName",
      attributeValue: "AttributeValue",
      condition: "Condition",
    },
  },
  { additionalProperties: s.json() },
);
