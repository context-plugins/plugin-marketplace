using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record FaceDetection
{
    /// <summary>
    /// Time, in milliseconds from the start of the video, that the face was detected. Note that Timestamp is not guaranteed to be accurate to the individual frame where the face first appears.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Timestamp")]
    public int? Timestamp { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Face")]
    public FaceDetail? Face { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
