using System.Text.Json.Serialization;
using TranscriptFetch.Core.Models;
using TranscriptFetch.Models.Enums;

namespace TranscriptFetch.Models;

/// <summary>
/// Attached to transcript failures. Distinguishes 'this video has no captions' from 'we could not check', and says whether transcribing the audio would still work.
/// </summary>
public record AiFallback
{
    /// <summary>
    /// True when retrying the same request with ai_fallback:true would actually start a transcription.
    /// </summary>
    [JsonPropertyName("available")]
    public required bool Available { get; init; }

    /// <summary>
    /// True only when we reached the video and confirmed no caption track exists. False means we could not check, NOT that captions exist.
    /// </summary>
    [JsonPropertyName("captions_unavailable")]
    public required bool CaptionsUnavailable { get; init; }

    /// <summary>
    /// Present when available is false: why AI transcription cannot be used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unavailable_reason")]
    public UnavailableReason? UnavailableReason { get; init; }

    [JsonPropertyName("message")]
    public required string Message { get; init; }

    /// <summary>
    /// Merge into the original request body to trigger the fallback.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("retry_with")]
    public RetryWith? RetryWith { get; init; }

    /// <summary>
    /// Credits charged on successful delivery. Failures are free. AI transcription bills by audio length, so this is an estimate from the measured media length when cost_estimated is true, and otherwise the one-block minimum.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cost_credits")]
    public int? CostCredits { get; init; }

    /// <summary>
    /// True when cost_credits came from the media's real duration; false when it is only the minimum, because the length was not known at that point.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cost_estimated")]
    public bool? CostEstimated { get; init; }

    /// <summary>
    /// Remaining balance; null for admins.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("balance")]
    public int? Balance { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
