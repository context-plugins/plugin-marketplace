using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;
using GoogleAnalytics.Models.Enums;

namespace GoogleAnalytics.Models;

/// <summary>
/// The filter for strings.
/// </summary>
public record GoogleAnalyticsAdminV1BetaAccessStringFilter
{
    /// <summary>
    /// The match type for this filter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("matchType")]
    public MatchType? MatchType { get; init; }

    /// <summary>
    /// If true, the string value is case sensitive.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("caseSensitive")]
    public bool? CaseSensitive { get; init; }

    /// <summary>
    /// The string value used for the matching.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public string? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
