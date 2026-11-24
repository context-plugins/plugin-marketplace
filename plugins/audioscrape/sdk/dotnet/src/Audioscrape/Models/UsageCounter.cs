using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

public record UsageCounter
{
    /// <summary>
    /// Configured plan limit for the period. <c>null</c> if unlimited.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    public long? Limit { get; init; }

    /// <summary>
    /// Count used in the current period.
    /// </summary>
    [JsonPropertyName("used")]
    public required long Used { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
