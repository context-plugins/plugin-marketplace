using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record PersonDetection
{
    /// <summary>
    /// The time, in milliseconds from the start of the video, that the person's path was tracked. Note that Timestamp is not guaranteed to be accurate to the individual frame where the person's path first appears.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Timestamp")]
    public int? Timestamp { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Person")]
    public PersonDetail? Person { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
