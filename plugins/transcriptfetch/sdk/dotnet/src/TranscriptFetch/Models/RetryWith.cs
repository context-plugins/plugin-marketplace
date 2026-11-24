using System.Text.Json.Serialization;
using TranscriptFetch.Core.Models;

namespace TranscriptFetch.Models;

/// <summary>
/// Merge into the original request body to trigger the fallback.
/// </summary>
public record RetryWith
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ai_fallback")]
    public bool? AiFallback { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
