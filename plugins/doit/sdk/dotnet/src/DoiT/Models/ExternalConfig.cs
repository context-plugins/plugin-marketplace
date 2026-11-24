using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Report configuration.
/// </summary>
public record ExternalConfig
{
    /// <summary>
    /// The list of metrics to apply to the report. Custom metric can be used only once. Maximum number of metrics is 4.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metrics")]
    public IReadOnlyList<ExternalMetric>? Metrics { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metricFilter")]
    public ExternalConfigMetricFilter? MetricFilter { get; init; }

    /// <summary>
    /// Controls how rows excluded by limits are rendered. Applies when any limit type is active
    /// (<c>metricFilter</c>, <c>limitByChange</c>, or a <c>group</c> entry with a <c>limit</c>). A report may configure
    /// at most two of those three limit types — not all three. When <c>displayValues</c> is not
    /// <c>actuals_only</c>, this field must be <c>none</c> (or omitted, which defaults to <c>none</c>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limitAggregation")]
    public LimitAggregation? LimitAggregation { get; init; } = LimitAggregation.None;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limitByChange")]
    public ExternalLimitByChange? LimitByChange { get; init; }

    /// <summary>
    /// How to aggregate data values in the report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("aggregation")]
    public Aggregation? Aggregation { get; init; }

    /// <summary>
    /// Advanced analysis options. Each can be set independently.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("advancedAnalysis")]
    public AdvancedAnalysis? AdvancedAnalysis { get; init; }

    /// <summary>
    /// Forecast configuration. On PATCH, omit to preserve existing settings; send null to clear/disable forecasting.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("forecastSettings")]
    public ExternalForecastSettings? ForecastSettings { get; init; }

    /// <summary>
    /// Time interval for grouping data in the report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timeInterval")]
    public TimeIntervalDoiTReportsApi? TimeInterval { get; init; }

    /// <summary>
    /// See <see href="https://help.doit.com/docs/cloud-analytics/reports/editing-your-cloud-report#dimensions">Dimensions</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensions")]
    public IReadOnlyList<DimensionDoiTReportsApi>? Dimensions { get; init; }

    /// <summary>
    /// Specify a predefined or custom time range for the report.
    /// For example, to specify a custom time range of "last 2 days", set the mode to <c>last</c>, the amount to <c>2</c>, and the unit to <c>day</c>. If <c>includeCurrent</c> is <c>true</c>, the range will be yesterday and today; otherwise, the range will be yesterday and the day before yesterday.
    /// If "custom" type is specified, you need to provide a custom time range in the <c>customTimeRange</c> field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timeRange")]
    public TimeSettings? TimeRange { get; init; }

    /// <summary>
    /// Secondary time range for comparative reports.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secondaryTimeRange")]
    public TimeSettingsSecondary? SecondaryTimeRange { get; init; }

    /// <summary>
    /// Whether to include <see href="https://help.doit.com/docs/cloud-analytics/reports/editing-your-cloud-report#promotional-credits">promotional credits</see>.
    /// If set to <b>true</b>, the report must use time interval <c>month</c>, <c>quarter</c>, or <c>year</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includePromotionalCredits")]
    public bool? IncludePromotionalCredits { get; init; }

    /// <summary>
    /// Whether to include subgroup totals in the report. This option has no impact when reading a report via API.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includeSubtotals")]
    public bool? IncludeSubtotals { get; init; } = false;

    /// <summary>
    /// The filters to apply to the report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filters")]
    public IReadOnlyList<ExternalConfigFilter>? Filters { get; init; }

    /// <summary>
    /// The rows that appear in the tabular format of the report. See <see href="https://help.doit.com/docs/cloud-analytics/reports/editing-your-cloud-report#group-by">Group by</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("group")]
    public IReadOnlyList<Group>? Group { get; init; }

    /// <summary>
    /// Type of visualization or output format. cumulative_comparison requires daily datetime dimensions (year, month, day), total aggregation, one metric, a secondary time range, and no comparative or forecast.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("layout")]
    public ExternalRenderer? Layout { get; init; }

    /// <summary>
    /// See <see href="https://help.doit.com/docs/cloud-analytics/reports/editing-your-cloud-report#view-as">View data as (Comparative report)</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayValues")]
    public DisplayValues? DisplayValues { get; init; }

    /// <summary>
    /// Currency code for monetary values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public Currency? Currency { get; init; }

    /// <summary>
    /// Orders the rows produced by <c>group</c>, both in the console and in a rendered <c>fileOutput</c>
    /// export. <c>a_to_z</c> orders them by the dimension value, <c>asc</c>/<c>desc</c> by the metric. It does
    /// not reorder the <c>rows</c> of a JSON result.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sortGroups")]
    public SortGroups? SortGroups { get; init; } = SortGroups.Asc;

    /// <summary>
    /// Orders the columns produced by <c>dimensions</c>, both in the console and in a rendered
    /// <c>fileOutput</c> export. It does not reorder the <c>rows</c> of a JSON result.
    /// <c>a_to_z</c> orders the columns by the dimension value, which for the <c>year</c>/<c>month</c>/<c>day</c>
    /// dimensions of a time series means chronologically. The default <c>desc</c> orders them by the
    /// metric instead, so a monthly report charts its priciest month first rather than in time
    /// order — set <c>a_to_z</c> for a time series you intend to export.
    /// A report with a forecast is always charted chronologically and ignores this field, and a
    /// comparative <c>displayValues</c> mode requires <c>a_to_z</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sortDimensions")]
    public SortDimensions? SortDimensions { get; init; } = SortDimensions.Desc;

    /// <summary>
    /// Data source of the report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataSource")]
    public DataSourceDoiTReportsApi? DataSource { get; init; }

    /// <summary>
    /// The splits to use in the report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("splits")]
    public IReadOnlyList<ExternalSplit>? Splits { get; init; }

    /// <summary>
    /// Display settings for the report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displaySettings")]
    public ExternalDisplaySettings? DisplaySettings { get; init; }

    /// <summary>
    /// Required when the time range is set to "custom". On PATCH, omit to preserve the existing range; send null to remove it.
    /// A PATCH that sets <c>timeRange</c> to a mode other than "custom" without sending <c>customTimeRange</c> removes it.
    /// Sending null while <c>timeRange.mode</c> stays "custom" is rejected.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customTimeRange")]
    public CustomTimeRange1? CustomTimeRange { get; init; }

    /// <summary>
    /// The field to count distinct values of. Only applicable when aggregation is set to "count".
    /// On PATCH, omit to preserve the existing field; send null to remove it.
    /// A PATCH that sets <c>aggregation</c> to a value other than "count" without sending <c>count</c> removes it.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("count")]
    public Count? Count { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
