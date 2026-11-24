using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Parameters that define when and how an alert is evaluated.
/// </summary>
public record AlertConfig
{
    /// <summary>
    /// Ignore metric values within these inclusive bounds for percentage-change alerts. Bounds use the metric units, not percentage-change units, and must satisfy lowerBound &lt;= upperBound. Omission on PATCH preserves the range; null clears it. Changing condition away from percentage-change clears the range; supplying a non-null range with another condition is rejected.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ignoreValuesRange")]
    public AlertIgnoreValuesRange? IgnoreValuesRange { get; init; }

    /// <summary>
    /// Data source used to query data for the alert. Affects which dimensions and metrics are available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataSource")]
    public DataSource? DataSource { get; init; } = DataSource.Billing;

    /// <summary>
    /// All supplied filters are applied together (AND across filters). Values within each filter follow its matching mode. Nonempty scopes replace legacy attributions. On PATCH, omission preserves scopes and [] clears them. With neither scopes nor attributions, evaluation covers all available billing data for the customer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scopes")]
    [MaxLength(26)]
    public IReadOnlyList<ExternalConfigFilter>? Scopes { get; init; }

    /// <summary>
    /// Define how metrics are selected and filtered in reports.
    /// </summary>
    [JsonPropertyName("metric")]
    public required MetricConfig Metric { get; init; }

    /// <summary>
    /// Currency code for monetary values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public Currency? Currency { get; init; }

    /// <summary>
    /// The period each evaluation looks at.
    /// </summary>
    [JsonPropertyName("timeInterval")]
    public required TimeInterval TimeInterval { get; init; }

    /// <summary>
    /// Type of comparison for the alert threshold (used with <c>operator</c> and <c>value</c>). If omitted on create, defaults to <c>percentage-change</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("condition")]
    public Condition? Condition { get; init; } = Condition.PercentageChange;

    /// <summary>
    /// Text/operator used to filter metric values in metric filters (gt = greater than, lt = less than).
    /// </summary>
    [JsonPropertyName("operator")]
    public required MetricFilterText Operator { get; init; }

    /// <summary>
    /// The <c>condition</c> threshold value. For example, actual metric threshold value for the <c>value</c> condition, or percentage change threshold value for the <c>percentage-change</c> condition.
    /// </summary>
    [JsonPropertyName("value")]
    public required double Value { get; init; }

    /// <summary>
    /// Add a dimension to break down the evaluation of the condition. For example, evaluate a condition over an attribution for each "Service". Use type:id from GET /analytics/v1/dimensions, for example fixed:service_description. An empty string on PATCH clears the breakdown. Not allowed with condition: <c>forecast</c>. Used when you Investigate an alert, the dimension becomes the report grouping.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("evaluateForEach")]
    public string? EvaluateForEach { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
