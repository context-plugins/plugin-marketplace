using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// Current state for a particular quota group.
/// </summary>
public record QuotaStatus
{
    /// <summary>
    /// Quota remaining after this request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remaining")]
    public int? Remaining { get; init; }

    /// <summary>
    /// Quota consumed by this request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("consumed")]
    public int? Consumed { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
