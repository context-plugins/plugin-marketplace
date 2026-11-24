using System.Text.Json.Serialization;
using Sapling.Core.Models;

namespace Sapling.Models;

public record ApiV1Rephrase429Error1
{
    /// <summary>
    /// Human-readable error message.
    /// </summary>
    [JsonPropertyName("msg")]
    public required string Msg { get; init; }

    /// <summary>
    /// Seconds until the request would fit the bucket. Absent when it never can.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("retry_after")]
    public double? RetryAfter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
