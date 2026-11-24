using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// The value of a metric.
/// </summary>
public record GoogleAnalyticsAdminV1BetaAccessMetricValue
{
    /// <summary>
    /// The measurement value. For example, this value may be '13'.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public string? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
