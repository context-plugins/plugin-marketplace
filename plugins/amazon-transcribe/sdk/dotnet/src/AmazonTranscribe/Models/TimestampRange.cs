using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record TimestampRange
{
    /// <summary>
    /// The time, in milliseconds, from the beginning of the audio stream to the start of the category match.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BeginOffsetMillis")]
    public int? BeginOffsetMillis { get; init; }

    /// <summary>
    /// The time, in milliseconds, from the beginning of the audio stream to the end of the category match.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EndOffsetMillis")]
    public int? EndOffsetMillis { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
