import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  widgetMonetaryMetricInternalSchema,
  widgetMonetaryMetricSchema,
  type WidgetMonetaryMetric,
} from "./widget-monetary-metric.js";

/** Computed widget result. The populated property corresponds to `kind`. */
export type WidgetResult = {
  /**
   * A monetary value over a period and its comparison with the equivalent prior period.
   * `monthToMonthGrowthPercentage` and `monthToMonthGrowthAmount` are both `null` when no
   * comparable prior-period value exists, such as when prior-period spend is zero.
   */
  monetaryMetric: WidgetMonetaryMetric;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const widgetResultProperties: s.Shape<WidgetResult> = {
  monetaryMetric: widgetMonetaryMetricInternalSchema,
};

export const widgetResultInternalSchema: Schema<WidgetResult> = s.object<WidgetResult>(
  widgetResultProperties,
  { additionalProperties: s.json() },
);

export const widgetResultSchema: Schema<WidgetResult> = s.lazySchema(() =>
  s.object<WidgetResult>(
    {
      ...widgetResultProperties,
      monetaryMetric: widgetMonetaryMetricSchema,
    },
    { additionalProperties: s.json() },
  ),
);
