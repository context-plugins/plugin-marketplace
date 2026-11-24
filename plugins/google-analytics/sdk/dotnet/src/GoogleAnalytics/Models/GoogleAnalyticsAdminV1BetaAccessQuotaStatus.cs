using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// Current state for a particular quota group.
/// </summary>
public record GoogleAnalyticsAdminV1BetaAccessQuotaStatus
{
    /// <summary>
    /// Quota consumed by this request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("consumed")]
    public int? Consumed { get; init; }

    /// <summary>
    /// Quota remaining after this request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remaining")]
    public int? Remaining { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
