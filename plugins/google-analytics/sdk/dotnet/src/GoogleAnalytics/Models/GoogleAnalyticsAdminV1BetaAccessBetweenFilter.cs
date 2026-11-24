using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// To express that the result needs to be between two numbers (inclusive).
/// </summary>
public record GoogleAnalyticsAdminV1BetaAccessBetweenFilter
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
