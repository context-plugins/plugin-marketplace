import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { advancedAnalysisSchema, type AdvancedAnalysis } from "./advanced-analysis.js";
import { aggregationSchema, type Aggregation } from "./aggregation.js";
import { countSchema, type Count } from "./count.js";
import { currencySchema, type Currency } from "./currency.js";
import { customTimeRange1Schema, type CustomTimeRange1 } from "./custom-time-range1.js";
import {
  dataSourceDoiTReportsApiSchema,
  type DataSourceDoiTReportsApi,
} from "./data-source-doi-treports-api.js";
import { dimensionDoiTReportsApiSchema, type DimensionDoiTReportsApi } from "./dimension-doi-treports-api.js";
import { displayValuesSchema, type DisplayValues } from "./display-values.js";
import { externalConfigFilterSchema, type ExternalConfigFilter } from "./external-config-filter.js";
import {
  externalConfigMetricFilterSchema,
  type ExternalConfigMetricFilter,
} from "./external-config-metric-filter.js";
import {
  externalDisplaySettingsInternalSchema,
  externalDisplaySettingsSchema,
  type ExternalDisplaySettings,
} from "./external-display-settings.js";
import {
  externalForecastSettingsSchema,
  type ExternalForecastSettings,
} from "./external-forecast-settings.js";
import { externalLimitByChangeSchema, type ExternalLimitByChange } from "./external-limit-by-change.js";
import { externalMetricSchema, type ExternalMetric } from "./external-metric.js";
import { externalRendererSchema, type ExternalRenderer } from "./external-renderer.js";
import { externalSplitSchema, type ExternalSplit } from "./external-split.js";
import { groupSchema, type Group } from "./group.js";
import { LimitAggregation, limitAggregationSchema } from "./limit-aggregation.js";
import { SortDimensions, sortDimensionsSchema } from "./sort-dimensions.js";
import { SortGroups, sortGroupsSchema } from "./sort-groups.js";
import {
  timeIntervalDoiTReportsApiSchema,
  type TimeIntervalDoiTReportsApi,
} from "./time-interval-doi-treports-api.js";
import { timeSettingsSecondarySchema, type TimeSettingsSecondary } from "./time-settings-secondary.js";
import { timeSettingsInternalSchema, timeSettingsSchema, type TimeSettings } from "./time-settings.js";

/** Report configuration. */
export type ExternalConfig = {
  /**
   * The list of metrics to apply to the report. Custom metric can be used only once. Maximum number
   * of metrics is 4.
   */
  metrics?: ExternalMetric[];
  metricFilter?: ExternalConfigMetricFilter;
  /**
   * Controls how rows excluded by limits are rendered. Applies when any limit type is active
   * (`metricFilter`, `limitByChange`, or a `group` entry with a `limit`). A report may configure at
   * most two of those three limit types — not all three. When `displayValues` is not
   * `actuals_only`, this field must be `none` (or omitted, which defaults to `none`).
   *
   * @default LimitAggregation.None
   */
  limitAggregation?: LimitAggregation;
  limitByChange?: ExternalLimitByChange;
  /** How to aggregate data values in the report. */
  aggregation?: Aggregation;
  /** Advanced analysis options. Each can be set independently. */
  advancedAnalysis?: AdvancedAnalysis;
  /**
   * Forecast configuration. On PATCH, omit to preserve existing settings; send null to
   * clear/disable forecasting.
   */
  forecastSettings?: ExternalForecastSettings;
  /** Time interval for grouping data in the report. */
  timeInterval?: TimeIntervalDoiTReportsApi;
  /**
   * See
   * [Dimensions](https://help.doit.com/docs/cloud-analytics/reports/editing-your-cloud-report#dimensions).
   */
  dimensions?: DimensionDoiTReportsApi[];
  /**
   * Specify a predefined or custom time range for the report. For example, to specify a custom time
   * range of "last 2 days", set the mode to `last`, the amount to `2`, and the unit to `day`. If
   * `includeCurrent` is `true`, the range will be yesterday and today; otherwise, the range will be
   * yesterday and the day before yesterday. If "custom" type is specified, you need to provide a
   * custom time range in the `customTimeRange` field.
   */
  timeRange?: TimeSettings;
  /** Secondary time range for comparative reports. */
  secondaryTimeRange?: TimeSettingsSecondary;
  /**
   * Whether to include [promotional
   * credits](https://help.doit.com/docs/cloud-analytics/reports/editing-your-cloud-report#promotional-credits).
   * If set to **true**, the report must use time interval `month`, `quarter`, or `year`.
   */
  includePromotionalCredits?: boolean;
  /**
   * Whether to include subgroup totals in the report. This option has no impact when reading a
   * report via API.
   *
   * @default false
   */
  includeSubtotals?: boolean;
  /** The filters to apply to the report. */
  filters?: ExternalConfigFilter[];
  /**
   * The rows that appear in the tabular format of the report. See [Group
   * by](https://help.doit.com/docs/cloud-analytics/reports/editing-your-cloud-report#group-by).
   */
  group?: Group[];
  /**
   * Type of visualization or output format. cumulative_comparison requires daily datetime
   * dimensions (year, month, day), total aggregation, one metric, a secondary time range, and no
   * comparative or forecast.
   */
  layout?: ExternalRenderer;
  /**
   * See [View data as (Comparative
   * report)](https://help.doit.com/docs/cloud-analytics/reports/editing-your-cloud-report#view-as).
   */
  displayValues?: DisplayValues;
  /** Currency code for monetary values. */
  currency?: Currency;
  /**
   * Orders the rows produced by `group`, both in the console and in a rendered `fileOutput` export.
   * `a_to_z` orders them by the dimension value, `asc`/`desc` by the metric. It does not reorder
   * the `rows` of a JSON result.
   *
   * @default SortGroups.Asc
   */
  sortGroups?: SortGroups;
  /**
   * Orders the columns produced by `dimensions`, both in the console and in a rendered `fileOutput`
   * export. It does not reorder the `rows` of a JSON result. `a_to_z` orders the columns by the
   * dimension value, which for the `year`/`month`/`day` dimensions of a time series means
   * chronologically. The default `desc` orders them by the metric instead, so a monthly report
   * charts its priciest month first rather than in time order — set `a_to_z` for a time series you
   * intend to export. A report with a forecast is always charted chronologically and ignores this
   * field, and a comparative `displayValues` mode requires `a_to_z`.
   *
   * @default SortDimensions.Desc
   */
  sortDimensions?: SortDimensions;
  /** Data source of the report. */
  dataSource?: DataSourceDoiTReportsApi;
  /** The splits to use in the report. */
  splits?: ExternalSplit[];
  /** Display settings for the report. */
  displaySettings?: ExternalDisplaySettings;
  /**
   * Required when the time range is set to "custom". On PATCH, omit to preserve the existing range;
   * send null to remove it. A PATCH that sets `timeRange` to a mode other than "custom" without
   * sending `customTimeRange` removes it. Sending null while `timeRange.mode` stays "custom" is
   * rejected.
   */
  customTimeRange?: CustomTimeRange1 | null;
  /**
   * The field to count distinct values of. Only applicable when aggregation is set to "count". On
   * PATCH, omit to preserve the existing field; send null to remove it. A PATCH that sets
   * `aggregation` to a value other than "count" without sending `count` removes it.
   */
  count?: Count | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const externalConfigProperties: s.Shape<ExternalConfig> = {
  metrics: s.optional(s.array(s.lazy(() => externalMetricSchema))),
  metricFilter: s.optional(s.lazy(() => externalConfigMetricFilterSchema)),
  limitAggregation: s.defaulted(limitAggregationSchema, LimitAggregation.None),
  limitByChange: s.optional(s.lazy(() => externalLimitByChangeSchema)),
  aggregation: s.optional(s.lazy(() => aggregationSchema)),
  advancedAnalysis: s.optional(s.lazy(() => advancedAnalysisSchema)),
  forecastSettings: s.optional(s.lazy(() => externalForecastSettingsSchema)),
  timeInterval: s.optional(s.lazy(() => timeIntervalDoiTReportsApiSchema)),
  dimensions: s.optional(s.array(s.lazy(() => dimensionDoiTReportsApiSchema))),
  timeRange: s.optional(s.lazy(() => timeSettingsInternalSchema)),
  secondaryTimeRange: s.optional(s.lazy(() => timeSettingsSecondarySchema)),
  includePromotionalCredits: s.optional(s.boolean()),
  includeSubtotals: s.defaulted(s.boolean(), false),
  filters: s.optional(s.array(s.lazy(() => externalConfigFilterSchema))),
  group: s.optional(s.array(s.lazy(() => groupSchema))),
  layout: s.optional(s.lazy(() => externalRendererSchema)),
  displayValues: s.optional(s.lazy(() => displayValuesSchema)),
  currency: s.optional(s.lazy(() => currencySchema)),
  sortGroups: s.defaulted(sortGroupsSchema, SortGroups.Asc),
  sortDimensions: s.defaulted(sortDimensionsSchema, SortDimensions.Desc),
  dataSource: s.optional(s.lazy(() => dataSourceDoiTReportsApiSchema)),
  splits: s.optional(s.array(s.lazy(() => externalSplitSchema))),
  displaySettings: s.optional(s.lazy(() => externalDisplaySettingsInternalSchema)),
  customTimeRange: s.optionalNullable(s.lazy(() => customTimeRange1Schema)),
  count: s.optionalNullable(s.lazy(() => countSchema)),
};

export const externalConfigInternalSchema: Schema<ExternalConfig> = s.object<ExternalConfig>(
  externalConfigProperties,
  { additionalProperties: s.json() },
);

export const externalConfigSchema: Schema<ExternalConfig> = s.lazySchema(() =>
  s.object<ExternalConfig>(
    {
      ...externalConfigProperties,
      timeRange: s.optional(s.lazy(() => timeSettingsSchema)),
      displaySettings: s.optional(s.lazy(() => externalDisplaySettingsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
