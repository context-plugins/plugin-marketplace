import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { moneyInternalSchema, moneySchema, type Money } from "./money.js";
import { widgetPeriodSchema, type WidgetPeriod } from "./widget-period.js";

/**
 * A monetary value over a period and its comparison with the equivalent prior period.
 * `monthToMonthGrowthPercentage` and `monthToMonthGrowthAmount` are both `null` when no comparable
 * prior-period value exists, such as when prior-period spend is zero.
 */
export type WidgetMonetaryMetric = {
  /**
   * Current-period monetary value. `amount` is a decimal string and `currency` is an ISO 4217 code.
   */
  value: Money;
  /** UTC date-time range covered by the widget result. `endTime` is exclusive. */
  period: WidgetPeriod;
  /**
   * Percentage change from the comparable prior period, or `null` when no comparison is available.
   */
  monthToMonthGrowthPercentage: number | null;
  /**
   * Absolute monetary change from the comparable prior period, or `null` when no comparison is
   * available.
   */
  monthToMonthGrowthAmount: Money;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const widgetMonetaryMetricProperties: s.Shape<WidgetMonetaryMetric> = {
  value: moneyInternalSchema,
  period: widgetPeriodSchema,
  monthToMonthGrowthPercentage: s.nullable(s.float64()),
  monthToMonthGrowthAmount: moneyInternalSchema,
};

export const widgetMonetaryMetricInternalSchema: Schema<WidgetMonetaryMetric> =
  s.object<WidgetMonetaryMetric>(widgetMonetaryMetricProperties, { additionalProperties: s.json() });

export const widgetMonetaryMetricSchema: Schema<WidgetMonetaryMetric> = s.lazySchema(() =>
  s.object<WidgetMonetaryMetric>(
    {
      ...widgetMonetaryMetricProperties,
      value: moneySchema,
      monthToMonthGrowthAmount: moneySchema,
    },
    { additionalProperties: s.json() },
  ),
);
