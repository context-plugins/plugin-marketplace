using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

/// <summary>
/// Present on rate-limit / quota errors. Omitted otherwise.
/// </summary>
public record UsageInfo2
{
    /// <summary>
    /// Current usage value (e.g., calls consumed this period).
    /// </summary>
    [JsonPropertyName("current")]
    public required long Current { get; init; }

    /// <summary>
    /// Configured limit for the period.
    /// </summary>
    [JsonPropertyName("limit")]
    public required long Limit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
