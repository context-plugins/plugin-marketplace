using System.Text.Json.Serialization;
using Sapling.Core.Models;

namespace Sapling.Models;

public record PaymentRequired1
{
    /// <summary>
    /// Human-readable error message.
    /// </summary>
    [JsonPropertyName("msg")]
    public required string Msg { get; init; }

    /// <summary>
    /// Seconds until the trial daily cap resets (next UTC midnight). Present only for the temporary trial-cap case.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("retry_after")]
    public int? RetryAfter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
