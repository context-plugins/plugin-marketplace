using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record TextDetectionResult
{
    /// <summary>
    /// The time, in milliseconds from the start of the video, that the text was detected. Note that Timestamp is not guaranteed to be accurate to the individual frame where the text first appears.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Timestamp")]
    public int? Timestamp { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TextDetection")]
    public TextDetectionAmazonRekognitionTextDetectionApi? TextDetection { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
