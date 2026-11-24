using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// Properties and cloud project pairs can have up to 50 server errors per hour.
/// </summary>
public record GoogleAnalyticsAdminV1BetaAccessQuotaStatus3
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
