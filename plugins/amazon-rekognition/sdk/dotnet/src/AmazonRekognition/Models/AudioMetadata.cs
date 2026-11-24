using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record AudioMetadata
{
    /// <summary>
    /// The audio codec used to encode or decode the audio stream.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Codec")]
    public string? Codec { get; init; }

    /// <summary>
    /// The duration of the audio stream in milliseconds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DurationMillis")]
    public int? DurationMillis { get; init; }

    /// <summary>
    /// The sample rate for the audio stream.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SampleRate")]
    public int? SampleRate { get; init; }

    /// <summary>
    /// The number of audio channels in the segment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NumberOfChannels")]
    public int? NumberOfChannels { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
