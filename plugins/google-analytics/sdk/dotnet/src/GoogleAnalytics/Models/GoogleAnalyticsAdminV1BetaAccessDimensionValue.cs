using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// The value of a dimension.
/// </summary>
public record GoogleAnalyticsAdminV1BetaAccessDimensionValue
{
    /// <summary>
    /// The dimension value. For example, this value may be 'France' for the 'country' dimension.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public string? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
