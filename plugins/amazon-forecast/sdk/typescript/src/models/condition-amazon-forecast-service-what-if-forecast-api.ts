import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The condition to apply. Valid values are EQUALS, NOT_EQUALS, LESS_THAN and GREATER_THAN. */
export const ConditionAmazonForecastServiceWhatIfForecastApi = {
  Equals: "EQUALS",
  NotEquals: "NOT_EQUALS",
  LessThan: "LESS_THAN",
  GreaterThan: "GREATER_THAN",
} as const;
export type ConditionAmazonForecastServiceWhatIfForecastApi =
  | (typeof ConditionAmazonForecastServiceWhatIfForecastApi)[keyof typeof ConditionAmazonForecastServiceWhatIfForecastApi]
  | (string & {});

export const conditionAmazonForecastServiceWhatIfForecastApiSchema: EnumSchema<ConditionAmazonForecastServiceWhatIfForecastApi> =
  s.enumOf<ConditionAmazonForecastServiceWhatIfForecastApi>(ConditionAmazonForecastServiceWhatIfForecastApi);
