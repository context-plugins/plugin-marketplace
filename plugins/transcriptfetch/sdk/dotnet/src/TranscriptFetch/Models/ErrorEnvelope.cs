using System.Text.Json.Serialization;
using TranscriptFetch.Core.Models;

namespace TranscriptFetch.Models;

public record ErrorEnvelope
{
    [JsonPropertyName("ok")]
    public string Ok { get; } = "False";

    [JsonPropertyName("request_id")]
    public required string RequestId { get; init; }

    [JsonPropertyName("error")]
    public required Error Error { get; init; }

    /// <summary>
    /// Structured failure reason on transcript endpoints (no_captions, captions_disabled, age_restricted, rate_limited, …).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public string? Reason { get; init; }

    /// <summary>
    /// Attached to transcript failures. Distinguishes 'this video has no captions' from 'we could not check', and says whether transcribing the audio would still work.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ai_fallback")]
    public AiFallback? AiFallback { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
