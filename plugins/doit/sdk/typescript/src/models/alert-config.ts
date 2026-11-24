import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { alertIgnoreValuesRangeSchema, type AlertIgnoreValuesRange } from "./alert-ignore-values-range.js";
import { Condition, conditionSchema } from "./condition.js";
import { currencySchema, type Currency } from "./currency.js";
import { DataSource, dataSourceSchema } from "./data-source.js";
import { externalConfigFilterSchema, type ExternalConfigFilter } from "./external-config-filter.js";
import { metricConfigSchema, type MetricConfig } from "./metric-config.js";
import { metricFilterTextSchema, type MetricFilterText } from "./metric-filter-text.js";
import { timeIntervalSchema, type TimeInterval } from "./time-interval.js";

/** Parameters that define when and how an alert is evaluated. */
export type AlertConfig = {
  /**
   * Ignore metric values within these inclusive bounds for percentage-change alerts. Bounds use the
   * metric units, not percentage-change units, and must satisfy lowerBound <= upperBound. Omission
   * on PATCH preserves the range; null clears it. Changing condition away from percentage-change
   * clears the range; supplying a non-null range with another condition is rejected.
   */
  ignoreValuesRange?: AlertIgnoreValuesRange | null;
  /**
   * Data source used to query data for the alert. Affects which dimensions and metrics are
   * available.
   *
   * @default DataSource.Billing
   */
  dataSource?: DataSource;
  /**
   * All supplied filters are applied together (AND across filters). Values within each filter
   * follow its matching mode. Nonempty scopes replace legacy attributions. On PATCH, omission
   * preserves scopes and [] clears them. With neither scopes nor attributions, evaluation covers
   * all available billing data for the customer.
   */
  scopes?: ExternalConfigFilter[];
  /** Define how metrics are selected and filtered in reports. */
  metric: MetricConfig;
  /** Currency code for monetary values. */
  currency?: Currency;
  /** The period each evaluation looks at. */
  timeInterval: TimeInterval;
  /**
   * Type of comparison for the alert threshold (used with `operator` and `value`). If omitted on
   * create, defaults to `percentage-change`.
   *
   * @default Condition.PercentageChange
   */
  condition?: Condition;
  /**
   * Text/operator used to filter metric values in metric filters (gt = greater than, lt = less
   * than).
   */
  operator: MetricFilterText;
  /**
   * The `condition` threshold value. For example, actual metric threshold value for the `value`
   * condition, or percentage change threshold value for the `percentage-change` condition.
   */
  value: number;
  /**
   * Add a dimension to break down the evaluation of the condition. For example, evaluate a
   * condition over an attribution for each "Service". Use type:id from GET
   * /analytics/v1/dimensions, for example fixed:service_description. An empty string on PATCH
   * clears the breakdown. Not allowed with condition: `forecast`. Used when you Investigate an
   * alert, the dimension becomes the report grouping.
   */
  evaluateForEach?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const alertConfigProperties: s.Shape<AlertConfig> = {
  ignoreValuesRange: s.optionalNullable(s.lazy(() => alertIgnoreValuesRangeSchema)),
  dataSource: s.defaulted(dataSourceSchema, DataSource.Billing),
  scopes: s.optional(s.array(s.lazy(() => externalConfigFilterSchema))),
  metric: metricConfigSchema,
  currency: s.optional(s.lazy(() => currencySchema)),
  timeInterval: timeIntervalSchema,
  condition: s.defaulted(conditionSchema, Condition.PercentageChange),
  operator: metricFilterTextSchema,
  value: s.float64(),
  evaluateForEach: s.optional(s.string()),
};

export const alertConfigInternalSchema: Schema<AlertConfig> = s.object<AlertConfig>(alertConfigProperties, {
  additionalProperties: s.json(),
});

export const alertConfigSchema: Schema<AlertConfig> = s.lazySchema(() =>
  s.object<AlertConfig>(
    {
      ...alertConfigProperties,
      scopes: s.optional(s.array(s.lazy(() => externalConfigFilterSchema)).check(s.maxLength(26))),
    },
    { additionalProperties: s.json() },
  ),
);
