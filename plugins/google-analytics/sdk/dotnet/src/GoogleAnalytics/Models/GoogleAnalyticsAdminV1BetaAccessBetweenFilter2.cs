using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// A filter for two values.
/// </summary>
public record GoogleAnalyticsAdminV1BetaAccessBetweenFilter2
{
    /// <summary>
    /// Begins with this number.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fromValue")]
    public GoogleAnalyticsAdminV1BetaNumericValue4? FromValue { get; init; }

    /// <summary>
    /// Ends with this number.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("toValue")]
    public GoogleAnalyticsAdminV1BetaNumericValue1? ToValue { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
