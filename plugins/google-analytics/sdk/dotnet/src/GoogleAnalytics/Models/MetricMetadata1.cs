using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;
using GoogleAnalytics.Models.Enums;

namespace GoogleAnalytics.Models;

/// <summary>
/// The metric metadata contains the API name for this compatibility information. The metric metadata also contains other helpful information like the UI name and description.
/// </summary>
public record MetricMetadata1
{
    /// <summary>
    /// The type of this metric.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type1? Type { get; init; }

    /// <summary>
    /// The display name of the category that this metrics belongs to. Similar dimensions and metrics are categorized together.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("category")]
    public string? Category { get; init; }

    /// <summary>
    /// This metric's name within the Google Analytics user interface. For example, <c>Event count</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uiName")]
    public string? UiName { get; init; }

    /// <summary>
    /// The mathematical expression for this derived metric. Can be used in <see href="#Metric">Metric</see>'s <c>expression</c> field for equivalent reports. Most metrics are not expressions, and for non-expressions, this field is empty.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expression")]
    public string? Expression { get; init; }

    /// <summary>
    /// Still usable but deprecated names for this metric. If populated, this metric is available by either <c>apiName</c> or one of <c>deprecatedApiNames</c> for a period of time. After the deprecation period, the metric will be available only by <c>apiName</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deprecatedApiNames")]
    public IReadOnlyList<string>? DeprecatedApiNames { get; init; }

    /// <summary>
    /// If reasons are specified, your access is blocked to this metric for this property. API requests from you to this property for this metric will succeed; however, the report will contain only zeros for this metric. API requests with metric filters on blocked metrics will fail. If reasons are empty, you have access to this metric. To learn more, see <see href="https://support.google.com/analytics/answer/10851388">Access and data-restriction management</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("blockedReasons")]
    public IReadOnlyList<BlockedReason>? BlockedReasons { get; init; }

    /// <summary>
    /// Description of how this metric is used and calculated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// True if the metric is a custom metric for this property.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customDefinition")]
    public bool? CustomDefinition { get; init; }

    /// <summary>
    /// A metric name. Useable in <see href="#Metric">Metric</see>'s <c>name</c>. For example, <c>eventCount</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiName")]
    public string? ApiName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
