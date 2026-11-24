using System.Text.Json.Serialization;
using GoogleCloudSpeechToText.Core.Models;

namespace GoogleCloudSpeechToText.Models;

/// <summary>
/// Provides information on adaptation behavior in response
/// </summary>
public record SpeechAdaptationInfo2
{
    /// <summary>
    /// If set, returns a message specifying which part of the speech adaptation request timed out.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timeoutMessage")]
    public string? TimeoutMessage { get; init; }

    /// <summary>
    /// Whether there was a timeout when applying speech adaptation. If true, adaptation had no effect in the response transcript.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("adaptationTimeout")]
    public bool? AdaptationTimeout { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
