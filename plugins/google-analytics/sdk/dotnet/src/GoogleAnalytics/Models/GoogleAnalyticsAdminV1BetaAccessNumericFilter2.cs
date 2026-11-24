using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;
using GoogleAnalytics.Models.Enums;

namespace GoogleAnalytics.Models;

/// <summary>
/// A filter for numeric or date values.
/// </summary>
public record GoogleAnalyticsAdminV1BetaAccessNumericFilter2
{
    /// <summary>
    /// The operation type for this filter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operation")]
    public Operation? Operation { get; init; }

    /// <summary>
    /// A numeric value or a date value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public GoogleAnalyticsAdminV1BetaNumericValue2? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
