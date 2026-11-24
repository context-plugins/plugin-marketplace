using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record StartStreamProcessorRequest
{
    /// <summary>
    /// The name of the stream processor to start processing.
    /// </summary>
    [JsonPropertyName("Name")]
    public required string Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StartSelector")]
    public StreamProcessingStartSelector? StartSelector { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StopSelector")]
    public StreamProcessingStopSelector? StopSelector { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
