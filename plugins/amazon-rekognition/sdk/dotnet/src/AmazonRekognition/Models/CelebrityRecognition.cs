using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record CelebrityRecognition
{
    /// <summary>
    /// The time, in milliseconds from the start of the video, that the celebrity was recognized. Note that Timestamp is not guaranteed to be accurate to the individual frame where the celebrity first appears.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Timestamp")]
    public int? Timestamp { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Celebrity")]
    public CelebrityDetail? Celebrity { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
