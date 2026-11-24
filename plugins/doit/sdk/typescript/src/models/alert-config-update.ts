import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { alertIgnoreValuesRangeSchema, type AlertIgnoreValuesRange } from "./alert-ignore-values-range.js";
import { condition1Schema, type Condition1 } from "./condition1.js";
import { currencySchema, type Currency } from "./currency.js";
import { dataSource1Schema, type DataSource1 } from "./data-source1.js";
import { externalConfigFilterSchema, type ExternalConfigFilter } from "./external-config-filter.js";
import { metricConfigSchema, type MetricConfig } from "./metric-config.js";
import { metricFilterTextSchema, type MetricFilterText } from "./metric-filter-text.js";
import { timeInterval1Schema, type TimeInterval1 } from "./time-interval1.js";

/**
 * Only supplied configuration fields change. A zero value is a valid threshold. Fields cannot be
 * null except ignoreValuesRange.
 */
export type AlertConfigUpdate = {
  /**
   * Ignore metric values within these inclusive bounds for percentage-change alerts. Bounds use the
   * metric units, not percentage-change units, and must satisfy lowerBound <= upperBound. Omission
   * on PATCH preserves the range; null clears it. Changing condition away from percentage-change
   * clears the range; supplying a non-null range with another condition is rejected.
   */
  ignoreValuesRange?: AlertIgnoreValuesRange | null;
  /** Omission preserves the saved data source. Tokenomics requires customer enablement. */
  dataSource?: DataSource1;
  /**
   * All supplied filters are applied together (AND across filters). Values within each filter
   * follow its matching mode. Omission preserves scopes and [] clears them.
   */
  scopes?: ExternalConfigFilter[];
  /** Define how metrics are selected and filtered in reports. */
  metric?: MetricConfig;
  /** Currency code for monetary values. */
  currency?: Currency;
  /** The period each evaluation looks at. Omission preserves the saved interval. */
  timeInterval?: TimeInterval1;
  /** Omission preserves the saved condition. */
  condition?: Condition1;
  /**
   * Text/operator used to filter metric values in metric filters (gt = greater than, lt = less
   * than).
   */
  operator?: MetricFilterText;
  /**
   * The `condition` threshold value. Omission preserves the saved value; an explicit 0 is a valid
   * threshold.
   */
  value?: number;
  /**
   * Add a dimension to break down the evaluation of the condition. Use type:id from GET
   * /analytics/v1/dimensions, for example fixed:service_description. Omission preserves the saved
   * breakdown and an empty string clears it. Not allowed with condition: `forecast`.
   */
  evaluateForEach?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const alertConfigUpdateProperties: s.Shape<AlertConfigUpdate> = {
  ignoreValuesRange: s.optionalNullable(s.lazy(() => alertIgnoreValuesRangeSchema)),
  dataSource: s.optional(s.lazy(() => dataSource1Schema)),
  scopes: s.optional(s.array(s.lazy(() => externalConfigFilterSchema))),
  metric: s.optional(s.lazy(() => metricConfigSchema)),
  currency: s.optional(s.lazy(() => currencySchema)),
  timeInterval: s.optional(s.lazy(() => timeInterval1Schema)),
  condition: s.optional(s.lazy(() => condition1Schema)),
  operator: s.optional(s.lazy(() => metricFilterTextSchema)),
  value: s.optional(s.float64()),
  evaluateForEach: s.optional(s.string()),
};

export const alertConfigUpdateInternalSchema: Schema<AlertConfigUpdate> = s.object<AlertConfigUpdate>(
  alertConfigUpdateProperties,
  { additionalProperties: s.json() },
);

export const alertConfigUpdateSchema: Schema<AlertConfigUpdate> = s.lazySchema(() =>
  s.object<AlertConfigUpdate>(
    {
      ...alertConfigUpdateProperties,
      scopes: s.optional(s.array(s.lazy(() => externalConfigFilterSchema)).check(s.maxLength(26))),
    },
    { additionalProperties: s.json() },
  ),
);
