using System.Text.Json.Serialization;
using Sapling.Core.Models;

namespace Sapling.Models;

public record ApiV1FileExtract429Error
{
    /// <summary>
    /// Human-readable error message.
    /// </summary>
    [JsonPropertyName("msg")]
    public required string Msg { get; init; }

    /// <summary>
    /// Seconds until the generation budget resets (mirrors Retry-After). Absent on the upload-limiter variant.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("retry_after")]
    public double? RetryAfter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
