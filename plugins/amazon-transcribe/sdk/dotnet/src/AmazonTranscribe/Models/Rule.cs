using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

/// <summary>
/// Exactly one member is set.
/// </summary>
public record Rule
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NonTalkTimeFilter")]
    public NonTalkTimeFilter? NonTalkTimeFilter { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("InterruptionFilter")]
    public InterruptionFilter? InterruptionFilter { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TranscriptFilter")]
    public TranscriptFilter? TranscriptFilter { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SentimentFilter")]
    public SentimentFilter? SentimentFilter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
