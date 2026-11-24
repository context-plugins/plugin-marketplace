using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record StopStreamProcessorRequest
{
    /// <summary>
    /// The name of a stream processor created by CreateStreamProcessor.
    /// </summary>
    [JsonPropertyName("Name")]
    public required string Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
